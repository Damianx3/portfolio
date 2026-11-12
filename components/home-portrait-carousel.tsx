
"use client";

import Image from "next/image";
import {
  animate,
  motion,
  type PanInfo,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

type Photo = {
  id: number;
  src: string;
  alt: string;
  position: string;
};

/*
  The last entry renders on top of the stack.

  Order from back to front:
  1. Speaking
  2. Outdoors
  3. Portrait

  This swaps the original first and last photos.
*/
const initialPhotos: Photo[] = [
  {
    id: 2,
    src: "/images/damian-speaking.webp",
    alt: "Damian Ramirez presenting at a podium",
    position: "speaking",
  },
  {
    id: 1,
    src: "/images/damian-outdoors.webp",
    alt: "Damian Ramirez standing outdoors on the UTRGV campus",
    position: "outdoors",
  },
  {
    id: 3,
    src: "/images/damian-portrait.webp",
    alt: "Portrait of Damian Ramirez wearing a dark blazer",
    position: "portrait",
  },
];

export function HomePortraitCarousel() {
  const [photos, setPhotos] = useState<Photo[]>(initialPhotos);

  return (
    <div
      className="portrait-stack swipe-stack"
      role="region"
      aria-roledescription="carousel"
      aria-label="Photos of Damian"
      aria-describedby="portrait-keyboard-help"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget ||
            (event.key !== "ArrowLeft" && event.key !== "ArrowRight")) return;
        event.preventDefault();
        setPhotos((current) => current.length > 1 ? current.slice(0, -1) : initialPhotos);
      }}
    >
      <span id="portrait-keyboard-help" className="sr-only">
        Swipe or use the left and right arrow keys to change photos.
      </span>
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {photos.at(-1)?.alt ?? "End of photos. Select View again to restart."}
      </span>
      {photos.length === 0 && (
        <button
          className="swipe-reset"
          type="button"
          onClick={() => setPhotos(initialPhotos)}
        >
          View again ↻
        </button>
      )}

      {photos.map((photo, index) => (
        <SwipePhoto
          key={photo.id}
          photo={photo}
          photos={photos}
          setPhotos={setPhotos}
          depth={photos.length - 1 - index}
        />
      ))}
    </div>
  );
}

function SwipePhoto({
  photo,
  photos,
  setPhotos,
  depth,
}: {
  photo: Photo;
  photos: Photo[];
  setPhotos: Dispatch<SetStateAction<Photo[]>>;
  depth: number;
}) {
  const x = useMotionValue(0);

  const rotateFromDrag = useTransform(
    x,
    [-180, 180],
    [-16, 16]
  );

  const opacity = useTransform(
    x,
    [-170, -70, 0, 70, 170],
    [0, 0.7, 1, 0.7, 0]
  );

  const isFront =
    photo.id === photos[photos.length - 1]?.id;

  const rotate = useTransform(
    rotateFromDrag,
    (value) =>
      value + (isFront ? 0 : photo.id % 2 ? 5 : -5)
  );

  const dismiss = async (direction: number) => {
    await animate(x, direction * 430, {
      duration: 0.22,
      ease: "easeOut",
    });

    setPhotos((current) =>
      current.filter((item) => item.id !== photo.id)
    );
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const direction =
      Math.sign(info.offset.x || info.velocity.x) || 1;

    if (
      Math.abs(info.offset.x) > 80 ||
      Math.abs(info.velocity.x) > 650
    ) {
      void dismiss(direction);
      return;
    }

    void animate(x, 0, {
      type: "spring",
      stiffness: 430,
      damping: 34,
    });
  };

  return (
    <motion.figure
      className={`profile-photo swipe-card ${photo.position}`}
      style={{
        x,
        rotate,
        opacity,
        zIndex: isFront ? 4 : Math.max(1, 3 - depth),
      }}
      animate={{
        scale: isFront
          ? 1
          : Math.max(0.88, 0.96 - depth * 0.035),
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: -170, right: 170 }}
      dragElastic={0.78}
      onDragEnd={handleDragEnd}
      whileDrag={{ cursor: "grabbing" }}
      aria-hidden={!isFront}
    >
      <Image
        src={photo.src}
        alt={isFront ? photo.alt : ""}
        fill
        priority={photo.id === 3}
        sizes="(max-width: 700px) 240px, 210px"
        draggable={false}
      />
    </motion.figure>
  );
}
