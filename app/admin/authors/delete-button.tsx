"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteAuthor } from "./actions";
import { Trash2 } from "lucide-react";

export function DeleteAuthorButton({ id, name }: { id: string; name: string }) {
  const [confirming, setConfirming] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirming) {
      setConfirming(true);
      return;
    }
    try {
      await deleteAuthor(id);
      router.refresh();
    } catch {
      setConfirming(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      className={`rounded-lg p-2 transition-colors ${
        confirming
          ? "bg-red-50 text-red-600 hover:bg-red-100"
          : "text-slate-400 hover:bg-red-50 hover:text-red-500"
      }`}
      title={confirming ? "Click again to confirm" : "Delete"}
    >
      <Trash2 className="h-4 w-4" />
    </button>
  );
}
