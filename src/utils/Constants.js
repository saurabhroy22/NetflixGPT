 export const NETFLIX_LOGO="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
 export const NETFLIX_BACKGROUND="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_medium.jpg";
 export const USER_ICON='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg';
 export const API_OPTIONS={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDBKEY,
    }
  };
  export const POSTER_CDN='https://image.tmdb.org/t/p/w400/';
  export const supported_Language=[{identifier:'en',name:'English'},{identifier:'hindi',name:'Hindi'},{identifier:'gujarati',name:'Gujarati'}];
  export const OPENAI=process.env.REACT_APP_OPENAI;