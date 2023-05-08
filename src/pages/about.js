import React, { useContext, useEffect } from "react";
import style from "./../styles/components/about.module.scss";
import MovieContext from "./../context/movieContext";

const About = () => {
  const { dispatch } = useContext(MovieContext);

  useEffect(() => {
    document.title = "About-us";
    dispatch({ type: "LOADING" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.mainAbout}>
      <div className={style.aboutContent}>
        <h2>About Movie-app</h2>
        Welcome to our movie website!
        <br />
        We are a team of passionate movie enthusiasts who have come together to
        create a platform for all movie lovers to explore, discover, and enjoy
        their favorite movies. Our website is built using React, Sass, and HTML,
        and we use the powerful TMDB API to provide our users with the most
        up-to-date and comprehensive information about movies from all over the
        world.
        <br /> Our goal is to create a one-stop-shop for all things movies. From
        the latest blockbusters to classic films, from indie movies to foreign
        films, we have it all covered. Our team works tirelessly to curate the
        best movie content, so you can trust that you're getting the most
        accurate and relevant information when you visit our site.
        <br /> We understand that movie preferences are personal and diverse,
        which is why we strive to offer a wide range of content to cater to
        everyone's tastes. Our movie database is updated regularly with the
        latest releases, so you can stay informed about what's new in the world
        of movies. We also offer personalized recommendations based on your
        viewing history, so you can discover new movies that you're sure to
        love.
        <br /> Our website is designed with user experience in mind. We want you
        to have a seamless and enjoyable experience when browsing our site. Our
        intuitive search function allows you to easily find the movies you're
        looking for, and our user-friendly interface ensures that navigating our
        site is a breeze. We also offer a range of features to enhance your
        movie-watching experience, such as trailers, reviews, ratings, and cast
        information.
        <br /> At our core, we are a team of movie lovers who are passionate
        about bringing the joy of movies to people everywhere. We believe that
        movies have the power to inspire, entertain, and educate, and we want to
        make sure that everyone has access to the best movie content out there.
        We also believe in the importance of community, and we encourage our
        users to interact with each other through our forums, chat rooms, and
        social media channels.
        <br /> We pride ourselves on being a trustworthy and reliable source of
        movie information. We take our responsibility to our users seriously and
        strive to provide the most accurate and up-to-date information possible.
        Our team is constantly working to improve our site, so if you have any
        feedback or suggestions, we would love to hear from you.
        <br />
        In conclusion, we hope you enjoy your experience on our movie website.
        We are committed to providing you with the best possible movie content
        and user experience, and we look forward to sharing our love of movies
        with you. Thank you for choosing our site, and happy movie-watching!
      </div>
    </div>
  );
};

export default About;
