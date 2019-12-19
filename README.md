# Tie the Knot

This is the repository for the Tie the Knot website. The deployed version of the site can be visited by clicking <a target="_blank" href="https://carly07.github.io/tie-the-knot/">here.</a>

Tie the Knot, designed by me, Carly Clark, provides an online wedding planning service offering advice, inspiration and wedding suppliers to help couples plan their perfect day.   

## UX

My goal was to design a site providing relevant information, in an easily accessible format, that inspires and assists couples planning their wedding. I opted for neutral tones interspersed with beautiful photography for a modern, romantic feel. This was coupled with a simple, minimalist structure, allowing users to interact with the site and choose what information they would like to read when they want to read it. 

### User Stories

As an engaged couple, we would like some inspiration and guidance to help us plan our wedding. 

As a member of the wedding industry, I want to promote my business / services to couples planning their wedding.

### Strategy

My goal was to design a simple, yet attractive site that enables users to access information quickly and easily.

### Scope

For engaged couples planning their wedding, I wanted to provide them with a number of wedding themes to inspire them and the tools they need to guide them through the planning process. This way, they would be able to get an idea of what they are hoping to achieve and can then use the step-by-step guide, checklist, budgeter, search for supplier’s map and the contact form to bring their ideas to life. 

For members of the wedding industry I wanted to display their contact details and a link to their site when they appear in the search results. I also wanted to provide them with the added option to feature on the site. 

### Structure
I wanted to present information in a format that flows logically through the planning process whilst not overwhelming users. I also wanted users to be able to easily access and use the tools provide. The step-by-step guide, checklist and budgeter are provided in a downloadable PDF version which users can print. 

### Skeleton

The basic wireframes for this site can be found within this <a target="_blank" href="https://github.com/Carly07/tie-the-knot/tree/master/assets/wireframes">repository</a>

### Surface
Soft natural tones of pinks and greys were chosen to create a modern, romantic feel. 

## Technologies Used

All the languages, frameworks, libraries, and tools used to construct this project are listed below. I have also provided a link to each official site and a brief overview of its usage.

•	<a target="_blank" href="https://us-east-1.console.aws.amazon.com/cloud9/home?region=us-east-1#">AWS Cloud9</a> – This project was built using a cloud9 Integrated Development Environment

•	HTML – the content of the website was written using HTML5

•	CSS – the website’s customised style was created using CSS3

•	<a target="_blank" href="https://getbootstrap.com/">Bootstrap v4.3.1</a> - The site was built using Bootstrap's grid system. I also adopted and modified several Bootstrap components.

•	JavaScript - The project uses JavaScript for the responsive and interactive elements so to ensure functionality.

•   <a target="_blank" href="https://cloud.google.com/maps-platform/">Google Maps Platform</a> – The Google Maps JavaScript API was used to display a map of the UK. A search box was added using the Places Library Autocomplete feature and the search result are displayed using the Marker Clustering and Info Windows features.  

•   <a target="_blank" href="https://www.emailjs.com/">EmailJS</a> - using their JS Software Development Kit (SDK), users enquiries are sent by email when they complete the Contact Form and click the send button.

•	<a target="_blank" href="https://fontawesome.com/">Font Awesome</a> - The icons used within this website were sourced from Font Awesome. 

•	<a target="_blank" href="https://fonts.google.com/">Google Fonts</a> – the font used throughout this website was obtained from Google Fonts.

•   <a target="_blank" href="https://www.google.co.uk/chrome/">Google Chrome</a> - This browser and its' developer tools were used throughout the development of the site. 

•	<a target="_blank" href="https://github.com/">GitHub</a> – GitHub was used for version control

•	<a target="_blank" href="https://validator.w3.org/">W3C Markup Validation Service</a> - The HTML and CSS code for this project was checked and validated by the W3C Markup Validation Service

## Features

The basic layout of the website was created using the <a target="_blank" href="https://getbootstrap.com/">Bootstrap 4</a> grid system. There are six main sections on the site, each with various features created with bootstrap components and modified using CSS and JavaScript. 

### Existing Features

#### Navbar

The navbar was created using Bootstrap. It is fixed to the top right-hand corner of the site and stays collapses behind a button to promote a minimalist feel. This site uses the scrollSpy feature in Bootstrap to automatically update the navigation based on the users scroll position to indicate which link is currently active in the viewport. An extra JavaScript function has been added to create a 'smooth scrolling' effect.  

#### Landing and About Sections

Landing at the site, users are presented with a cover photo of a groom embracing his bride whilst she clutches her floral bouquet. Beneath this is an overview of ‘Tie the Knot’ containing a few paragraphs introducing the service, which aims to catch users’ attention and entice them to read on.

#### Planning Section

The Planning section offers users three helpful downloads; a step-by-step guide, checklist and budgeter to help plan their wedding. Users can access these by navigating to the relevant card and clicking on the icon.  

On small devices the cards are displayed on top of each other in a single column whilst on larger devices the cards are made horizontal and are displayed across three columns. 

#### Inspiration Section

In this section, flip cards are used to display 10 wedding themes. The front of each card only displays the theme name and a corresponding photograph to promote a minimalist feel, however, users can hover the mouse over the card or click on it to flip it over and read more information regarding that particular wedding theme. 

#### Supplier Section

Here a search box and map have been embedded using Google Maps JavaScript API, Places Library and the Autocomplete feature, presenting users with the opportunity to search for wedding venues, suppliers and services within their desired area. Marker Clustering and the Info Window’s features have also been employed to present the search results in a user-friendly manner. 

#### Featured Section

This section advertises three wedding suppliers. Each is displayed on a Bootstrap card including an eye-catching image, the suppliers name linking users to their website and a brief overview of their service.  

#### Contact

Users can submit their enquiries by completing the Contact Form at the bottom of the page. This can be easily navigated to using the navbar at the top right-hand corner of the page or using the Contact Us link in the footer. Users are only required to provide a few basic details (name, email and subject) before using the free text box to type their question or query and then clicking the send button. EmailJS has been implemented to enabled form handling. 

#### Footer

The footer was created using the same colour scheme as the navbar for comfort and familiarity. There are two headings; the first, Tie the Knot, contains a link to the ‘About’ section and another link to the Contact form. The second heading, Follow Us, invites users to follow links to five social media platforms. These are currently linked to the relevant social media home pages as Tie the Knot does not have a presence on Social Media. At the bottom of the footer, in smaller text is some copyright text. On larger devices this content is split across two columns whilst on smaller devices the content is displayed in one column for user experience.

### Features Left to Implement

In the future I would like to add a feature allowing users to create their own accounts so they can build a digital scrap book / wedding planning book where they can store all their ideas, quotes and bookings. 

## Testing

### Developer tools

AWS cloud9 live preview, google chrome developer tools and responsinator were utilised throughout the development of the project to identify and successfully address any bugs, errors or style issues affecting UX on various screen resolutions. W3C Markup Validation Service and JSHint were also used to check the validity of my HTML and CSS code.

### User scenarios

The newly engaged couple achieved their desired outcome of being presented with inspiration and guidance to assist them in planning their wedding. They arrive at the site and are immediately greeted to a beautiful image capturing a bride and groom as they embrace. The image does not reveal the couples faces allowing users to imagine themselves as the bride and groom. They can then read a brief overview about Tie the Knot before scrolling down to the planning and inspiration sections, where they are presented with advice, guidance and wedding theme ideas to inspire and assist. From there the engaged couple can navigate to the supplier and featured sections to find wedding suppliers who will bring their ideas to life. Finally, if the couple have any specific questions not answered within the site, they can request advice by submitting the contact form located at the bottom of the site. All the links and buttons contained within the site were manually tested on various devices to ensure functionality. 

Members of the wedding industry can achieve their goal of promoting their business / services by getting in touch using the Contact form. This sends an email with their details and enquiry to Tie the Knot. Their business / service can then be advertised within the featured section of the site. Additionally, wedding suppliers contact details and websites are displayed within an info window that opens when a user completes a google map search within the Suppliers section and clicks on a marker. 

On the Contact form all users are required to enter their name, email, subject and question. If users try to submit the form with any of the fields blank, they are presented with a message requesting they enter the required details. Similarly, if they enter an invalid email address, they receive an error message. Once the form is complete, users can click on the send button which sends an email with their enquiry and opens a model, thanking the user for their enquiry.

### Multiple browsers and devices

After the site was deployed, I tested it across four browsers (Chrome, Safari, Internet Explorer, FireFox) and on multiple devices (Samsung Galaxy J3, iPhone 7 Plus, 8, iPad 6, iPad Air, MacBook Air, HP laptop and iMac) as well as on Responsinator to ensure compatibility and responsiveness. Whilst testing, I noticed that the flip cards were not rotating correctly on Safari. Having researched the problem, I found that adding a prefix in webkit and other browsers fixed the issue. I also found that the alert modal was firing when the contact form was submit without all fields complete. The issue was fixed by manually calling the modal with javascript on submit. 

## Deployment

All code was committed to a local Git Repository and then pushed to a remote <a target="_blank" href="https://github.com/Carly07/tie-the-knot">Github repository</a> This was achieved by typing git add . within the terminal in order to stage all pending updates. Then type git commit -m "example massage" adding your own message briefly explaining what you are committing. A remote repository was then created on the GitHub Website by clicking on the "start a project", typing a name and clicking the green button. Back in the terminal, the remote repository was added by typing 'Git remote add origin' followed by the URL of our remote repository on GitHub. Finally, the code was pushed to the remote repository by typing 'git push -u origin master'.

From the GitHub remote repository, it was then published on <a target="_blank" href="https://carly07.github.io/tie-the-knot/">GitHub Pages</a> This was done by selecting <strong>master branch</strong> from the <strong>Source</strong> dropdown menu contained within the GitHub Pages section of the <strong>Settings</strong> tab on my GitHub projects’ repository.

To run the project locally, simply clone the repository directly into your chosen editor by typing ‘git clone’ and then pasting https://github.com/Carly07/tie-the-knot.git into your terminal. 

## Credits

### Content

#### #About

• The text was written by me, Carly Clark  

#### #Planning

• The step-by-step guide was copied and adapted from <a target="_blank" href="https://www.hitched.co.uk/wedding-planning/organising-and-planning/ultimate-wedding-planning-guide/">Hitched</a> 

• The Checklist was adapted from <a target="_blank" href="https://onplanners.com/template/wedding-planning-checklist">On:Planners.com</a>

• The Budgeter was adapted from <a target="_blank" href="https://thealmanac.org/template-ideas/034-free-printable-wedding-budget-checklist-planner-templates-template-ideas-il-fullxfull-nm3w/">Thealmanac</a>

#### #Inspiration

• The text for Country Barn, Beach, Garden Party, Fall, Winter Wonderland and Vintage wedding themes was copied and adapted from <a target="_blank" href="https://www.theknot.com/content/most-popular-wedding-themes-right-now">theknot</a>

• Enchanted Forest text was copied and adapted from <a target="_blank" href="https://happywedding.in.th/th/tips/wedding-planning-ceremony/international-themed-tailored/42689/inb">Happy Wedding</a>

• Festival text was copied and adapted from <a target="_blank" href="https://www.hitched.co.uk/wedding-planning/organising-and-planning/festival-weddings/">Hitched</a>

• Carnival text was copied and adapted from <a target="_blank" href="https://www.thegayweddingguide.co.uk/carnival-wedding-theme/">The Gay Wedding Guide</a>

• Vintage text was copied and adapted from <a target="_blank" href="https://www.brides.com/story/wedding-themes-for-every-bridal-style">Brides.com</a>

• Traditional text was copied and adapted from <a target="_blank" href="https://www.easyweddings.com.au/articles/wedding-themes-popular-wedding-styles-explained/">Easy Weddings</a>

### Media

•	The photographs used throughout this site were found on <a target="_blank" href="https://www.google.com/imghp?hl=en">Google Images</a>

## Acknowledgements

The search for suppliers google map code was customized from this example on <a target="_blank" href="https://stackoverflow.com/questions/21412111/how-to-add-a-googlemap-search-box-to-my-customized-map/21412927">Stack Overflow</a>

The form handling API code was customized from <a target="_blank" href="https://www.emailjs.com/">EmailJS</a> 

Special thanks the my mentor, Antonio Rodriguez for your help and advice witht his project. 

<strong>This site is for educational purposes only.</strong> 