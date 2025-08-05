"use client";

import { useFormspark } from "@formspark/use-formspark";
import { useState } from "react";

const formId = "3d52evWBA";

export default function ContactForm() {
  const [submit, submitting] = useFormspark({
    formId: formId,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData.entries());

    try {
      await submit(data);
      setSubmitted(true);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto text-gray-800 text-left text-sm">
      <h2 className="text-lg font-bold mb-4">Contact</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="hidden"
          name="_email.subject"
          value="Aussie Spirit：{{data.firstName}}様からお問い合わせ"
        />
        <input
          type="text"
          name="name"
          placeholder="お名前"
          required
          className="border p-2 w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="メールアドレス"
          required
          className="border p-2 w-full"
        />
        <textarea
          name="message"
          placeholder="メッセージ"
          required
          className="border p-2 w-full"
        />
        <button
          type="submit"
          disabled={submitting}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          {submitting ? "送信中..." : "送信"}
        </button>
      </form>

      {/* モーダル（送信成功） */}
      {submitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded shadow-md text-center max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">送信完了</h2>
            <p className="mb-4">お問い合わせありがとうございます。</p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              閉じる
            </button>
          </div>
        </div>
      )}

      {/* モーダル（送信失敗） */}
      {error && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded shadow-md text-center max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4 text-red-600">送信失敗</h2>
            <p className="mb-4">
              エラーが発生しました。時間をおいて再度お試しください。
            </p>
            <button
              onClick={() => setError(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
