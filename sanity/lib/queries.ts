import { Author } from "@/sanity.types";
import { loadQuery } from "./client";

export const fetchAuthor = () =>
  loadQuery<Author[]>({
    query: `*[_type == "author"]`,
  });
