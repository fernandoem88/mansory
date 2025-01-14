import { UiButton } from "@/lib/ui/Button";
import { PaginationNumbers } from "./styled";

interface Props {
  page: number;
  perPage: number;
  count: number;
  onChange: (page: number) => void;
}

export const UiPagination = ({ page, count, onChange }: Props) => {
  const min = Math.max(1, page - 1);
  const max = Math.min(page + 4, count);
  const totalNumbers = Math.max(0, max - min + 1);
  const hasMoreNext = max < count;
  const hasMorePrevious = min > 1;

  return (
    <PaginationNumbers>
      {hasMorePrevious && <span>...</span>}
      {new Array(totalNumbers).fill(0).map((_, index) => {
        const value = index + min;
        const isCurrent = page === value;
        return (
          <UiButton
            onClick={() => onChange(value)}
            variant={isCurrent ? "contained" : "outlined"}
            rounded
            key={value}
            disabled={isCurrent}
            color={isCurrent ? "primary" : undefined}
          >
            {value}
          </UiButton>
        );
      })}
      {hasMoreNext && <span>...</span>}
    </PaginationNumbers>
  );
};
