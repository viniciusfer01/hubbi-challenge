import { FC } from "react";
import { ScrollArea } from "../components/ScrollArea";

const HomePage: FC = () => {
  return (
    <div className="text-center m-8">
      <h1 className="font-bold text-5xl text-yellow m-3">
        Introduction to Star Wars
      </h1>

      <ScrollArea className="h-[36rem] w-auto rounded-md px-4 text-yellow">
        ## Introduction to My Star Wars App I am excited to introduce my latest
        project: a Star Wars app that connects to the SWAPI (Star Wars API) to
        deliver a rich and immersive experience of the Star Wars universe.
        Developed using modern web technologies, including React for the
        frontend, Tailwind CSS for styling, and Node.js for the backend, this
        app showcases data from one of the most beloved franchises in cinematic
        history in a sleek and user-friendly manner. ### Key Features of the App
        - **React**: Leveraging React’s component-based architecture, the app
        ensures a dynamic and responsive user experience. - **Tailwind CSS**:
        Tailwind’s utility-first CSS framework enables custom and elegant
        designs without sacrificing performance. - **Node.js**: The backend is
        powered by Node.js, providing robust and scalable server-side operations
        to handle API requests efficiently. ## Exploring the Star Wars Universe
        ### A Galaxy Far, Far Away The Star Wars universe, created by George
        Lucas, is a vast and intricate galaxy teeming with diverse planets,
        complex characters, and epic stories. Set in a distant galaxy where
        technology and mysticism coexist, Star Wars has captivated audiences
        since the release of the original film in 1977. ### Key Components of
        the Star Wars Universe #### Planets and Locations The Star Wars galaxy
        is home to numerous planets, each with its unique environment and
        inhabitants. From the arid deserts of Tatooine to the bustling
        metropolis of Coruscant, the variety of locations adds depth and
        richness to the storytelling. - **Tatooine**: A desert planet and the
        birthplace of Anakin and Luke Skywalker, it is known for its harsh
        conditions and twin suns. - **Coruscant**: The political hub of the
        galaxy, featuring towering skyscrapers and serving as the seat of the
        Galactic Republic and later the Empire. - **Hoth**: An icy wasteland
        that serves as the location for the Rebel Alliance's Echo Base in "The
        Empire Strikes Back." #### The Force Central to the Star Wars narrative
        is the Force, an energy field that grants individuals various powers
        based on their connection to it. The Force has a light side, associated
        with peace and knowledge, and a dark side, linked to power and
        aggression. - **Jedi**: Guardians of peace and justice, the Jedi Order
        trains individuals sensitive to the Force in the ways of the light side.
        - **Sith**: In stark contrast to the Jedi, the Sith harness the dark
        side of the Force, seeking power and dominance over the galaxy. ####
        Iconic Characters The Star Wars saga is driven by its memorable
        characters, each contributing to the overarching conflict between good
        and evil. - **Luke Skywalker**: The central hero of the original
        trilogy, Luke's journey from a farm boy on Tatooine to a powerful Jedi
        Knight is a cornerstone of the series. - **Darth Vader**: Once a heroic
        Jedi Knight named Anakin Skywalker, he falls to the dark side and
        becomes the formidable Sith Lord, Darth Vader. - **Princess Leia**: A
        leader of the Rebel Alliance, Leia is known for her courage,
        intelligence, and strong leadership. #### Starships and Vehicles Star
        Wars features an array of iconic starships and vehicles that play
        crucial roles in the series’ battles and journeys. - **Millennium
        Falcon**: Piloted by Han Solo and Chewbacca, this legendary freighter is
        known for its speed and pivotal role in key Rebel victories. - **X-Wing
        Fighters**: The primary starfighter of the Rebel Alliance, instrumental
        in the destruction of both Death Stars. - **TIE Fighters**: The Empire's
        agile and numerous starfighters, recognizable by their distinctive twin
        ion engines. ### Expanding the Universe The Star Wars universe continues
        to expand with new films, television series, books, and comics. Recent
        additions like "The Mandalorian," "The Book of Boba Fett," and the
        sequel trilogy have introduced new characters and storylines, enriching
        the tapestry of this beloved galaxy. ### Conclusion My Star Wars app
        aims to bring the magic and excitement of the Star Wars universe to your
        fingertips. By utilizing React, Tailwind CSS, and Node.js, the app
        provides a seamless and visually appealing way to explore and appreciate
        the depth of the Star Wars saga. Whether you are a long-time fan or a
        newcomer, this app offers a gateway to the endless adventures and rich
        lore of a galaxy far, far away.
      </ScrollArea>
    </div>
  );
};

export default HomePage;
