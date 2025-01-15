import { UiButton } from "@/lib/ui/Button";
import { FormEvent } from "react";
import { SearchChip, SearchForm, SearchInput } from "./styled";

interface Props {
  search: string;
  onChange: (search: string) => void;
}

export const SearchFilter = ({ search, onChange }: Props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("query")?.toString().toLocaleLowerCase().trim();

    if (!query) {
      alert("please enter some value");
      return;
    }
    if (query === search.trim().toLocaleLowerCase()) {
      alert("search value did not change");
      return;
    }

    e.currentTarget.reset();
    onChange(query);
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchChip>#{search}</SearchChip>
      <SearchInput name="query" placeholder="Nature / Technology / ..." />
      <UiButton type="submit" color="primary" variant="contained">
        Search
      </UiButton>
    </SearchForm>
  );
};
