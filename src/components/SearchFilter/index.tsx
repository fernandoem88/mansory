import { FONT_SIZES, PALETTE } from "@/lib/theme";
import { UiButton } from "@/lib/ui/Button";
import { FormEvent } from "react";

interface Props {
  search: string;
  onChange: (search: string) => void;
}

export const SearchFilter = ({ search, onChange }: Props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("query")?.toString();

    if (!query) {
      alert("please enter some value");
      return;
    }
    if (query.trim() === search.trim()) {
      alert("search value did not change");
      return;
    }

    e.currentTarget.reset();
    onChange(query);
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: 12, padding: 12, alignItems: "center" }}
    >
      <div
        style={{
          fontSize: FONT_SIZES.body1,
          backgroundColor: PALETTE.grey["100"],
          borderRadius: 8,
          padding: "6px 8px",
          textTransform: "capitalize",
        }}
      >
        #{search}
      </div>
      <input
        style={{ height: 24, width: 180, marginLeft: "auto", padding: 4 }}
        name="query"
        placeholder="Nature / Technology / ..."
      />
      <UiButton type="submit" color="primary" variant="contained">
        Search
      </UiButton>
    </form>
  );
};
