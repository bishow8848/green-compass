import { AuthorForm } from "../author-form";

export default function NewAuthorPage() {
  return (
    <div className="p-6">
      <AuthorForm mode="create" />
    </div>
  );
}
