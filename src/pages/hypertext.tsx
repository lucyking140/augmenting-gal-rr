import * as React from "react";
//import { Link } from "wouter"; //TODO: getting an error the useParams and other hooks don't exist in wouter?
import { Link, useParams } from "wouter";

import resps from "../resps.json";

// import "../styles/resps.css";

// let id_num = null;

export default function Hypertext() {

  return (
    <div className="container">
      <br />

      <div className="title">
        Kazimir Malevich's "White on White"

        <Link to="/">
          <button>Back</button>
        </Link>
      </div>

      <div className="imgbox">
        <img
          className="center-fit"
          src="https://cdn.glitch.global/85701763-95d4-4e0a-9eaa-56b66f30513b/white-on-white.jpg?v=1740566523943"
        />
        <div className="imgcap">
          Kazimir Malevich, White on White, 1918. Source:
          <a
            href="https://www.researchgate.net/publication/329686403_Iconicity_in_Cognition_and_Communication"
            target="_blank"
          >
            {" "}
            Iconicity in Cognition and Communication
          </a>
        </div>
      </div>

      <div className="content">
        <p>
        “In the year 1913, trying desperately to free art from the dead weight of the real world, I took refuge in the form of the square”
          - Kazimir Malevich, quoted in <a href="magazine.artland.com/art-movement-suprematism/" target="_blank">Wolfe</a>.
        </p>
        <br />
        <p>
          <a href="https://en.wikipedia.org/wiki/Kazimir_Malevich">Kazimir Malevich's</a> "White on White," made at a time where such an
          emphasis on abstract color and shape was considered revolutionary and 
          countercultural, has now become characteristic of a <a href="https://www.reddit.com/r/ArtistLounge/comments/1auuidf/why_do_people_say_modern_art_is_bad/" target="_blank">debate</a> over the
          <a href="https://thespellbinder.net/9085/ae/why-do-so-many-people-hate-modern-art/" target="_blank"> legitimacy</a> of this form of "art." While often considered to be
          talentless and plain, such subversive work was both artisitcally and
          politically impactful both at the time of its creation and in its
          influences today, introducing questions of the commodification of art
          and the definition of art itself. In the modern context, Malevich's political intentions and the philosophical purpose of the viewing and distribution of art is also hindered by the 
          incredible class inequality associated with its ownership and <a href="https://www.invaluable.com/artist/malevich-kasimir-u416jm99rk/sold-at-auction-prices/?srsltid=AfmBOoowiFQipiN0OokUzxUEA3lfVcQB3OxyEwdXwBOHSqoG_3wJnbLB" target="_blank">sale</a>. 
        </p>
        <p>
          Malevich (23 February [O.S.
          11 February] 1879 – 15 May 1935) was a Russian avant-garde artist in
          the late 19th and early 20th century, working at a time of massive
          upheavil in{" "}
          <a href="https://en.wikipedia.org/wiki/Russian_Revolution" target="_blank">Russia</a>{" "}
          and throught{" "}
          <a href="https://en.wikipedia.org/wiki/World_War_I" target="_blank">Europe</a>. Malevich himself
          coined the term <a href="https://www.tate.org.uk/art/art-terms/s/suprematism#:~:text=Name%20given%20by%20the%20artist,a%20limited%20range%20of%20colours" target="_blank">Suprematism</a>, refering to his focus on the supremacy of the simplest elements 
          of color and shape. This form contrasted with the strictly-regulated <a href="https://www.thecollector.com/soviet-realism-stalin-control/" target="_blank">Soviet Realism</a> form used 
          as a method of propoganda, but also fit into a <a href="https://www.musings-on-art.org/blogs/art-movements/avant-garde-the-lenin-years?srsltid=AfmBOorOCljQeFy-Q-ep5ZEo0evJorvuiSXfagJ3RP9ULxbNvZyAnMCL" target="_blank">broader artistic vision</a> cultivated by Lenin of art
          that prompted reflection and eliminated the role of consumerism and opulence through the removal of any visual reference to property and products.
        </p>
        <p>
          His role in the Soviet art school <a href="https://en.wikipedia.org/wiki/Vkhutemas" target="_blank"> Vkhutemas </a> solidified his influence on the Soviet art sphere.
        </p>
        
        <p>
          <a href="https://docs.google.com/document/d/1nVdpDxsAeMDNKtlKLmZFZduhcrvUfOSIrRBbwwvykSM/edit?usp=sharing" target="_blank">Personally</a>, I find works like Malevich's and others like Josef Albers <a href="https://www.guggenheim.org/artwork/173">Homage to the Square</a> to 
          introduce an opportunity for multiple layers of the viewing experience, with their relative lack of objects forcing the viewer
          to more closely investigate the exact details and reflect on the potential intentions of the artist.
          In a more <a href="https://www.metmuseum.org/art/collection/search/437654" target="_blank">maximalist image</a> packed with action, these details still hold the same value, but are often overlooked.
        </p>
        
      </div>
    </div>
  );
}
