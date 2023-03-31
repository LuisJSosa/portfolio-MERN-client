import React from 'react';

function TopicsPage() {
    return (
        <>
            <h2>Web Development Concepts</h2>

            <nav id="nav-2">
                <a className="secondary-anchor" href="#about-web-servers">Web Servers</a>
                <a className="secondary-anchor" href="#about-frontend-design">Frontend Design</a>
                <a className="secondary-anchor" href="#about-image-optimization">Optimized Images</a>
                <a className="secondary-anchor" href="#about-stylesheet">Stylesheets</a>
                <a className="secondary-anchor" href="#forms">Forms</a>
                <a className="secondary-anchor" href="#express">Express</a>
                <a className="secondary-anchor" href="#javascript">JavaScript</a>
                <a className="secondary-anchor" href="#dom">DOM</a>
            </nav>

            <article id="about-web-servers">
                <h3>About Web Servers</h3>

                <p> This page was created by creating an HTML file named index on my main directory. Then adding the necessary HTML tags and metadata by
                    using the integrated HTML boilerplate. The index page is the default URL or local file that loads automatically when an HTTP client,
                    often a web browser, sends a request to a default home domain. </p>
                <p> The browser inspector tools tell us the name of the file, the status of the file, meaning whether the HTTP request coming from the
                    client (the browser) was able to reach the file successfully, in which case the status will show the code 200. The inspect tool also
                    provides the original HTML code and lets you edit the code in real time to see the changes, though they are not saved on your computer
                    in the original file. In my machine, the browser inspector tool shows the Request URL: http://129.0.0.1:5500/M1/a1-sosalorl/index.html,
                    Request Method: GET, Status Code: 200 OK and Remote Address: 129.0.0.1:5500. </p>
                <p> In the Inspect tools, when I click on the network tab, I see the page named index.html, with a 200 status, stylesheet.css file with
                    404 and favicon.ico with 200 as well. It's worth pointing out that there was no favicon file on my local machine when looking at the
                    network tab in the inspect tools, as opposed to the OSU server. Since a status of 200 means that a page was successfully loaded, whereas,
                    a 404 status means that the server could not load the specific file, we know that the index page I created was able to load onto the
                    server without issues. The request method for my index file is GET in both my local machine and the OSU server. Another difference is
                    between my local machine and the server in the network tab is that unlike when I access the tab on my index file locally, while on the
                    OSU server my remote address (IP) is displayed there. Locally, there is no status code for the response header, in the server my response
                    header had a status of 200. However, because the HTML boilerplate I used included a link tag pointing to a stylesheet.css file, which
                    I have not created yet. I also see a request for style.css with an error status code of 404 given that this page does not exist yet.
                    The server is trying to locate the referenced stylesheet file, but it never existed, thus generating a 404 status code for that stylesheet file.
                    The 404 status error associated with the stylesheet.css means that the file is referencing a CSS file that does not exist, which therefore
                    means that it was not able to load it. </p>
                <p> Additionally, the favicon file shows a successful 200 code even though I never created such a file. This means that the favicon file was
                    already on the OSU server by default when I transferred my file to the web server. </p>

                <p> The current URL for my file in the OSU server is: https://web.engr.oregonstate.edu/~sosalorl/a1-sosalorl/ where http:// is the scheme,
                    which denotes the protocol of the file; web.Engr is the subdomain; oregonstate.edu is the URL domain; ~sosalorl/a1-sosalorl/ is the resource. </p>
            </article>

            <article id="about-frontend-design">
                <h3>Frontend Design</h3>
                <p>Frontend design is an umbrella of design concepts and principles concerned with creating of the most optimal and accessible user
                    experience for a websites, web interfaces and online applications. This user experience is achieved mainly by following industry
                    standards and common page layouts concerned with the aesthetics, ease of use, and functionality of the site that take into account
                    a wide variety of users backgrounds and preferences in order to be able to need a wide range of user expectations.</p>
                <h4>The Five "E"s Of Usability</h4>
                <dl>
                    <dt>Effective</dt>
                    <dd>Users need to be able to quickly and intuitively navigate through a site or page and find what they are looking for.</dd>
                    <dt>Efficient</dt>
                    <dd>Users need to be presented with clean layouts where they can quickly find their desired destination or result as fast as possible.</dd>
                    <dt>Easy to Navigate</dt>
                    <dd>The site and page's purpose needs to be clear and well-explained and presented to the user in a manner that will facilitate the user search and site navigation.</dd>
                    <dt>Error-free</dt>
                    <dd>The site content needs to be clear, without technical bugs or misspellings.</dd>
                    <dt>Enjoyable</dt>
                    <dd>This goes, hand in hand with the other four E's. If the content is error-fee, ease to navigate and to the point, it will generate user enjoyment
                        as long as the content and page layout are engaging and/or thought-provoking </dd>
                </dl>
                <p>The purpose of layout tags is to help define and orderly structure a page. Additionally, layouts make it easier for machines to be able to read a
                    web page, which is an important factor when considering page usability for visually impaired users that rely on screen readers to navigate a website
                    as well as designing websites with search engine and SEO in mind. Additionally, layout tags make it easier collaborate with other developers since it
                    makes your code clearer and easier to follow.</p>
                <p>Anchor tags are commonly used in HTML to link to external sites and to navigate to different sections of a page or a different page within a website.
                    In HTML, anchor tags are represented with &lt;a&gt; href="#" &lt;/a&gt;, where &lt;a&gt; is the actual tag and HREF is the HTML element attribute that
                    points to the external site or other page/section. In orders to point to an external site, we would need to replace the # sign inside the HREF for an
                    external URL, such as &lt;a&gt; href="www.google.com" &lt;/a&gt;. In order to link to a different HTML element, we need to replace the # sign for the
                    ID attribute of the element we are linking to. For instance, if we were to point to the content inside an &lt;article id="Blog"&gt; We do this as
                    follows, &lt;a&gt; href="blog" &lt;/a&gt; where the article element with ID of blog could be in the same web page, but it could also be linking to
                    the element of a different page. </p>
            </article>

            <article id="about-image-optimization">
                <h3>Optimizing Images</h3>
                <p> Website performance increases when photographs are optimized for a particular site. Users tend to only spend a couple seconds on a site waiting for
                    it to load before quickly exit the page. </p>
                <p>There are six conditions that must be met in order to optimize photos:</p>
                <dl>
                    <dt>Descriptive file name</dt>
                    <dd>Search Engine performance greatly improves when using descriptive names for your files.It also helps makes it easier for search engine bots to read
                        your website.</dd> <dt>Small file size</dt>
                    <dd>File sizes that are smaller use less server space and speed up page loading for you.</dd>
                    <dt>Exact dimensions</dt>
                    <dd>Exact photo measurements aid with the styling and design of your site.</dd>
                    <dt>Correct file format</dt>
                    <dd>Enhances picture quality and general site appearance by using the correct formats for the right media being displayed.</dd>
                    <dt>Reduced resolution</dt>
                    <dd> different screen sizes, demand different photo resolutions; reducing the resolution of your images for small screens provides greater freedom with
                        and aids in reducing the size of your picture files.</dd>
                    <dt>Color Mode</dt>
                    <dd>Different color modes, such RGB and Indexed, give you greater creative freedom and more design options.</dd>
                </dl>
                <h4>File Formats, and Most Appropriate Uses Cases</h4>
                <dl>
                    <dt>GIF</dt>
                    <dd>video sequences, and animations.</dd>
                    <dt>PNG</dt>
                    <dd>Shapes and line art.</dd>
                    <dt>SVG</dt>
                    <dd>Vector Graphics and animated images.</dd>
                    <dt>JPG</dt>
                    <dd>Photos</dd>
                    <dt>WebP</dt>
                    <dd>Photos with transparent backgrounds.</dd>
                </dl>
            </article>

            <article id="about-stylesheet">
                <h3>Stylesheets</h3>
                <p>Stylesheets are files that the reuse of style for different and/or multiple HTML elements. The major benefits of using stylesheets in websites,
                    the added flexibility to be able to modify multiple items at once and ease of code reusability. </p>
                <h4>These are the Five Ways to Incorporate Stylesheets and Why?</h4>
                <dl>
                    <dt>External CSS</dt>
                    <dd>Helps to reuse styling and reduces code redundancy.</dd>
                    <dt>Embedded within a style element</dt>
                    <dd>used when a single page just requires the most minimal styling.</dd>
                    <dt>Inline</dt>
                    <dd>When only a single HTML at time element needs to be style. Commonly considered by practice.</dd>
                    <dt>In JavaScript literals</dt>
                    <dd>Alters styling through fixed JavaScript variables.</dd>
                    <dt>In regular JavaScript</dt>
                    <dd>Uses JavaScript event listeners and the DOM object to change the current styling.</dd>
                </dl>
            </article>

            <article id="forms">
                <h3>Forms</h3>

                <p>
                    The six major accessability goals for forms are:
                    <strong>To have explicit instructions</strong> visible above the form and on the labels, with the caveat that placeholder values will only aid persons with vision.
                    <strong>To explain why you're gathering data</strong> and define which fields are essential.
                    Because the messages displayed by the built-in HTML browser are not readable on the screen, you should <strong>confirm that validation messages are legible on the screen.</strong>
                    <strong>To set the first field to autofocus</strong> so that users may start typing without using the keyboard.
                    To give flexibility for persons who cannot or do not want to use a mouse or touchpad, each form control may be filled out using the keyboard.
                    <strong>to add tab indexing to complicated forms</strong> to make it obvious which fields should be filled in which order.
                </p>

                <p>
                    All form data and fields are enclosed by the form tag. It has two attributes: 'action,' which specifies where the request should be sent,
                    and'method,' which specifies the HTTP method to be used.
                    The label tag instructs users on the purpose of their data input. It simply has one attribute, 'for,' which defines the HTML element it is aiming for.
                    Controls are divided and organized using the fieldset and legend tags.
                    Many different types of form components are generated by the input tag. It has two attributes: 'type,' which identifies the type of user input
                    requested, and 'name,' which indicates to the server which section of the form the data belongs to.
                    The select tag creates a drop-down menu of available options.
                    The option tag adds a list of options to the select tag's list. It contains a single attribute named 'value,' which reflects the user's selection and is conveyed to the server.
                    Using the text area element, a user may add multiple lines of text. It has the following properties: autocomplete, autofocus, disabled, placeholder, readonly, and required.
                    The button tag receives user input and sends all form data to the server.
                </p>

                <p>
                    Now let us discuss the most important form styles for boosting usability:
                    To maintain consistency in typography, the font-family should be inherited from the body.
                    CSS design should let users to comprehend where they left off or what they have just completed.
                    The'mandatory' status of a field is crucial for informing users about which fields are necessary and which they may ignore.
                    All options that include the mandatory property should be marked with an asterisk.
                    When an input is invalid, the border color should be changed from gray to red, and green when it is valid.
                    To boost contrast, change the color and placeholder text when users hover over an input.
                    Inputs, options, and buttons should be around the size of a fingertip.
                    Allow for breathing room by including a margin above each fieldset.
                    Padding should be placed to the fieldset to keep labels and controls from snagging on the edges.
                    A legend should be supplied that describes or prompts the user about the form controls contained in each fieldset.
                    Text should be made bigger to accommodate larger fingers and arthritic hands.

                </p>
            </article>

            <article id="express">
                <h3>Express</h3>

                <p>
                    JavaScript may be used outside of a browser thanks to a server-side tool called Node.js.
                    We may use NPM, a Node package manager, to install different packages for our Node project.
                    Express is a Node.js framework that is used to build RESTful APIs.
                    These three technologies enable us to produce effective online programs outside of the browser by offering a wide variety of features and pre-built tools
                    for developing web and mobile applications. Node makes it easy to get started with development.
                    Furthers more, due of its simplicity, versatility, scalability, and minimalism, Express is one of the most used web framework.
                </p>
            </article>

            <article id="javascript">
                <h3>JavaScript Concepts</h3>

                <p>
                    The primary data types in JavaScript are integers which are numbers, booleans which have a true or false value, strings which represent words, symbols.
                    Additionally, Javascript has the unique values: undefined and null, and objects.
                </p>

                <p>
                    In JavaScript, JSON, objects, and arrays data types.
                    In contrast to an array, which is a list of elements, an object is a collection of name-value pairs.
                    Json  a common text-based format based on JavaScript object syntax for displaying structured data.
                    It is frequently employed for data transmission in online applications.
                </p>

                <p>
                    A loop is a set of commands that are executed just once but can be repeated.
                    Other execution paths in the code can be established by using conditional statements with the
                    appropriate comparison and boolean operators. Loops allow the same set of statements to be
                    executed repeatedly on all the objects in a series. The loop function repeatedly iterates
                    over each item in the collection, either indefinitely or until a predefined condition is fulfilled.
                    In JavaScript, conditional statements regulate behavior and decide whether specific parts of code may be executed.
                </p>

                <p>
                    Object-oriented programming (OOP) is a programming style that centers software design on data rather than functions
                    and logic. An object is a data field with discrete characteristics and behavior.
                </p>

                <p>
                    Functional programming is a declarative programming approach which creates programs
                    by using sequential functions rather than statements.
                </p>
            </article>

            <article id="dom">
                <h3>Document Object Model</h3>
                <p>
                    The point of using DOM or async changes is that these technologies provide an update without refreshing the page.
                    We utilize JavaScript and React to update the DOM because they allow us to modify the
                    design of web pages and generate interactivity or dynamic components without having to
                    rely on lengthy lines of code. Both are capable of handling a variety of APIs for altering
                    HTML, style, and format in the DOM.
                </p>
            </article>
        </>
    );
}

export default TopicsPage;