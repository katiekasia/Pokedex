import "../css/about.css";
import me from "../images/me.png";

export default function About() {
  return (
    <div className="about-page">
      <h1>Pokemon Go</h1>
      <p>If you're playing Pokémon GO, feel free to add me! 😉</p>
      <p>Username: kasia369</p>
      <div className="me-image">
        <img src={me} alt="Me" />
      </div>
      <div class="images">
      <div className="go-card">
        <img
          src="https://imgs.search.brave.com/dySoBzozMtSJbBJpGTRiRZUUQUHGozfmsMjSzhcT_F0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbGF0/Zm9ybS5wb2x5Z29u/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/c2l0ZXMvMi9jaG9y/dXMvaGVybWFuby9w/b2x5Z29uL2dhbWUv/aW1hZ2UvMzg3MTMv/cG9rZW1vbl9nb19i/b3hhcnQuanBnP3F1/YWxpdHk9OTAmc3Ry/aXA9YWxsJmNyb3A9/MCw2LjI1LDEwMCw4/Ny41Jnc9MjQwMA"
          alt="Pokemon GO QR or Trainer Code"
        />
      </div>

      <div className="pokemon-gif">
        <img
          src="https://imgs.search.brave.com/gZsOBeWUwWz8KCBurRzc_I26Fwq5RBO9vqGFOKWxxgA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnJl/ZGQuaXQvd3pzcTFy/bnNhNGZkMS5naWY.gif"
          alt="Tiny Pikachu running"
        />
      </div>
      </div>
    </div>
  );
}
