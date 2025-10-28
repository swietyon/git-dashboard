export type Repo = {
  name: string;
  html_url: string;
};

export async function getUserRepos(username: string): Promise<Repo[]> {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);

  if (!response.ok) {
    throw new Error("Nie udało się pobrać danych z GitHub API");
  }

  return response.json();
}