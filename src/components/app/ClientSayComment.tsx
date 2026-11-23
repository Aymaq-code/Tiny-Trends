"use client";

import { RefObject, useRef } from "react";
import Image from "next/image";
import { useCardRevealAnimation } from "@/src/libs/gsapAnimation";
import { comments } from "@/src/libs/content";
import "../../styles/components/app/clientSayCard.css";

type ClientSayCommentProps = {
  viewportRef: RefObject<HTMLDivElement | null>;
  trackRef: RefObject<HTMLUListElement | null>;
};

export default function ClientSayComment({
  viewportRef,
  trackRef,
}: ClientSayCommentProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useCardRevealAnimation({ scopeRef: cardRef });

  return (
    <div
      ref={(element) => {
        viewportRef.current = element;
        cardRef.current = element;
      }}
      className="clientSay_card">
      <ul ref={trackRef}>
        {comments.map((comment) => (
          <li key={comment.id}>
            <div className="clientSay_card-head">
              <div className="clientSay_profile">
                <div className="clientSay_profile-image">
                  <Image
                    fill
                    unoptimized
                    src={comment.photo || "/images/default-avatar.png"}
                    alt={`${comment.name}'s profile`}
                    sizes="52px"
                  />
                </div>

                <p className="client-name">{comment.name}</p>
              </div>

              <div className="clientSay_rating">
                {"★".repeat(comment.rate ?? 0)}
              </div>
            </div>

            <div className="clientSay_quote">
              {/* Keep your existing quotation SVG here */}
            </div>

            <p className="client-comemnt">{comment.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
