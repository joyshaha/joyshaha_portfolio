import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  return (
    <button type="button" className="inline-flex min-h-11 items-center gap-2 rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800" onClick={() => setLikes(likes + 1)}>
      Like <span aria-live="polite">{likes}</span>
    </button>
  );
}
