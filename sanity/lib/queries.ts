import { Author, Experience, Projects, SocialLinks, Technologies } from "@/sanity.types";
import { loadQuery } from "./client";

export const fetchAuthor = () =>
  loadQuery<Author[]>({
    query: `*[_type == "author"]`,
  });

export const fetchSkills = () =>
  loadQuery<Technologies[]>({
    query: `*[_type == "technologies"]`,
  });

export const fetchExperience = () =>
  loadQuery<Experience[]>({
    query: `*[_type == "experience"]`,
  });

export const fetchSocialLink = () =>
  loadQuery<SocialLinks[]>({
    query: `*[_type == "socialLinks"]`,
  });

export const fetchProjects = () =>
  loadQuery<Projects[]>({
    query: `*[_type == "projects"]`,
  });
