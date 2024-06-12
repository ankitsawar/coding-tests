# Front End Coding Test

For the assessment we’ll be building out a responsive static html page that matches the designs [here](https://www.figma.com/design/oVC5v6aSlO2MhbQEobgzn2/old-pricing-page?node-id=0-1). If you have any issues with the Figma link please use the images in the [examples](examples/desktop-pricing.jpg) folder.

We have included an empty JavaScript file and set up TailwindCSS in the build process. We want to see you write HTML and JavaScript from scratch as much as possible while using [TailwindCSS](https://tailwindcss.com/docs/utility-first) utility classes for styling. 

Please fork this repository to your personal GitHub account and clone it locally. Once cloned you can start up the development server with:

```
cd front-end
npm install
npm run dev
```

The project has been setup with [TailwindCSS](https://tailwindcss.com/docs/utility-first) and [http-server](https://www.npmjs.com/package/http-server) for local development.  

As you’ll see in the designs, there are three viewport sizes included, we would like to see all three working in your finished submission.

Links and buttons don’t have to lead anywhere, but we would like to see the hamburger menu functioning, this is a chance to showcase some JS skills.

Additionally, for both tablet and mobile viewport sizes, please use JavaScript to add an appropriate class ‘tablet’ or ‘mobile’ to all buttons.

Double and triple check that everything looks good, and feel free to add comments in code or a README file to explain your approach if you’d like.

Email a link back to your repository for us to review. We should be able to clone it locally, run the `npm run dev` command and verify the project. We will most likely use Google Chrome or Firefox to test out the various viewports.

You have 48 hours from now to return this exercise back to us. Good luck, and feel free to reach out with any questions!



Approach
   Desktop > Tablet > Mobile

Components Preparation
   Header > Footer > Main

Used 
   Flexbox, Grid, 

Assets Optimization

JS optimization

CSS
   I've defined custom classes in input.css using Tailwind's @apply directive. This approach allows us to apply a consistent set of styles by simply using these predefined classes on elements, eliminating the need to repeatedly add the same utility classes directly to each element.

