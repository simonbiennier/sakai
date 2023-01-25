export class CountryService {
  getCountries = async () => {
    const res = await fetch("/data/countries.json", {
      headers: { "Cache-Control": "no-cache" },
    });
    const d = await res.json();
    return d.data;
  };
}
