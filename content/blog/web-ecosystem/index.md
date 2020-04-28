---
title: "Getting to Know the Web Ecosystem"
date: "2020-04-28T15:38:11.844Z"
---

This article aims to bring more info related the basics of web ecosystem, to understand the basics is extremely important to developers who are starting in Front End or Back End development.

It's a compiled of links and quick explanations for each topic, that might help you to get comfortable to create web applications or to maintain old ones.

## 1. Communication between Server - Client

- The Client-Server Model

    ![https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Client-server-model.svg/1920px-Client-server-model.svg.png](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Client-server-model.svg/1920px-Client-server-model.svg.png)

    Client–server model is a **distributed application structure** that partitions tasks or workloads between the providers of a resource or service, **called servers**, and service requesters, called **clients**. 

    Clients and servers will **communicate over a computer network** on separate hardware or in the same system. 

    A server host runs one or more server programs, which share their resources with clients. A **client does not share** any of its resources, but it **requests content or service from a server**.

    Clients therefore initiate communication sessions with servers, which await incoming requests.

    [Client-server model](https://en.wikipedia.org/wiki/Client%E2%80%93server_model)

- HTTP - Tim Berners Lee's gift to the World

    The **Hypertext Transfer Protocol** (HTTP) is an application-level protocol for distributed, collaborative, hypermedia information systems. **This is the foundation for data communication** for the World Wide Web since 1990. 

    HTTP is a **generic and stateless** protocol which can be used for other purposes as well using extensions of its request methods, error codes, and headers.

    Basically, HTTP is a TCP/IP based communication protocol, that is used to deliver data (HTML files, image files, query results, etc.) on the World Wide Web. The default port is TCP 80, but other ports can be used as well. It provides a **standardized way for computers to communicate** with each other. HTTP specification specifies how clients' request data will be constructed and sent to the server, and how the servers respond to these requests.

    There are **three basic features** that make HTTP a simple but powerful protocol:

    - **HTTP is connectionless:** The HTTP client, i.e., a browser initiates an HTTP request and after a request is made, the client waits for the response. The server processes the request and sends a response back after which client disconnect the connection. So client and server knows about each other during current request and response only. Further requests are made on new connection like client and server are new to each other.
    - **HTTP is media independent:** It means, any type of data can be sent by HTTP as long as both the client and the server know how to handle the data content. It is required for the client as well as the server to specify the content type using appropriate MIME-type.
    - **HTTP is stateless:** As mentioned above, HTTP is connectionless and it is a direct result of HTTP being a stateless protocol. The server and client are aware of each other only during a current request. Afterwards, both of them forget about each other. Due to this nature of the protocol, neither the client nor the browser can retain information between different requests across the web pages.

    ### HTTP Request Methods:

    The request method indicates the **method to be performed** on the resource identified by the given Request-URI. The method is case-sensitive and should always be mentioned in uppercase. The following table lists all the supported methods in HTTP/1.1

    **GET →** The GET method is used to retrieve information from the given server using a given URI. Requests using GET should only retrieve data and should have no other effect on the data.

    **POST →** A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms.

    **PUT →** Replaces all the current representations of the target resource with the uploaded content.

    **DELETE →** Removes all the current representations of the target resource given by URI.

    **HEAD →** Same as GET, but it transfers the status line and the header section only.

    **CONNECT →** Establishes a tunnel to the server identified by a given URI.

    **OPTIONS →** Describe the communication options for the target resource.

    **TRACE →** Performs a message loop back test along with the path to the target resource.

    ```jsx
    // Doing a request with Vanilla JS
    const Http = new XMLHttpRequest();
    const url='https://jsonplaceholder.typicode.com/posts';

    // GET method will retrieve information from server
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
      console.log(Http.responseText)
    }

    // Doing a POST with Axios
    import axios from 'axios';

    axios({
    // The POST method
      method: 'post',
      url: '/user/12345',
      data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
      }
    });
    ```

    HTTP Status Codes

    The Status-Code element is a 3-digit integer where first digit of the Status-Code defines the class of response and the last two digits do not have any categorization role. There are 5 values for the first digit:

    **1xx: Informational →** It means the request was received and the process is continuing.

    **2xx: Success →** It means the action was successfully received, understood, and accepted.

    **3xx: Redirection →** It means further action must be taken in order to complete the request.

    **4xx: Client Error →** It means the request contains incorrect syntax or cannot be fulfilled.

    **5xx: Server Error →** It means the server failed to fulfill an apparently valid request.

    you can find more about HTTP here -> [HTTP Tutorial](https://www.tutorialspoint.com/http)

## 2. How the browser gets and shows stuff

The browser's main components are ([1.1](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#1_1)):

1. **The user interface**: this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.
2. **The browser engine**: marshals actions between the UI and the rendering engine.
3. **The rendering engine** : responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
4. **Networking**: for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.
5. **UI backend**: used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.
6. **JavaScript interpreter**. Used to parse and execute JavaScript code.
7. **Data storage**. This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

![https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/layers.png](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/layers.png)

***Figure : Browser components***

It is important to note that browsers such as Chrome run multiple instances of the rendering engine: one for each tab. Each tab runs in a separate process.

## Understanding Critical Rendering Path

Web performance includes the server requests and responses, loading, scripting, rendering, layout, and the painting of the pixels to the screen.

A request for a web page or app starts with an HTML request. The server returns the HTML - response headers and data. The browser then begins parsing the HTML, converting the received bytes to the DOM tree. The browser initiates requests every time it finds links to external resources, be they stylesheets, scripts, or embedded image references. Some requests are blocking, which means the parsing of the rest of the HTML is halted until the imported asset is handled. The browser continues to parse the HTML making requests and building the DOM, until it gets to the end, at which point it constructs the CSS object model. With the DOM and CSSOM complete, the browser builds the render tree, computing the styles for all the visible content. After the render tree is complete, layout occurs, defining the location and size of all the render tree elements. Once complete, the page is rendered, or 'painted' on the screen.

### Document Object Model

DOM construction is incremental. The HTML response turns into tokens which turns into nodes which turn into the DOM Tree. A single DOM node starts with a startTag token and ends with an endTag token. Nodes contain all relevant information about the HTML element. The information is described using tokens. Nodes are connected into a DOM tree based on token hierarchy. If another set of startTag and endTag tokens come between a set of startTag and endTags, you have a node inside a node, which is how we define the hierarchy of the DOM tree.

The greater the number of nodes, the longer the following events in the critical rendering path will take. Measure! A few extra nodes won't make a difference, but divitis can lead to jank.

### CSS Object Model

The DOM contains all the content of the page. The CSSOM contains all the styles of the page; information on how to style that DOM. CSSOM is similar to the DOM, but different. While the DOM construction is incremental, CSSOM is not. CSS is render blocking: the browser blocks page rendering until it receives and processes all of the CSS. CSS is render blocking because rules can be overwritten, so the content can't be rendered until the CSSOM is complete.

CSS has its own set of rules for identifying valid tokens. Remember the C in CSS stands for 'Cascade'. CSS rules cascade down. As the parser converts tokens to nodes, with descendants of nodes inheriting styles. The incremental processing features don't apply to CSS like they do with HTML, because subsequent rules may override previous ones. The CSS object model gets built as the CSS is parsed, but can't be used to build the render tree until it is completely parsed because styles that are going to be overwritten with later parsing should not be rendered to the screen.

In terms of selector performance, less specific selectors are faster than more specific ones. For example, `.foo {}` is faster than `.bar .foo {}` because when the browser finds `.foo`, in the second scenario, it has to walk up the DOM to check if `.foo` has an ancestor `.bar`. The more specific tag requires more work from the browser, but this penalty is not likely worth optimizing.

If you measure the time it takes to parse CSS, you'll be amazed at how fast browsers truly are. The more specific rule is more expensive because it has to traverse more nodes in the DOM tree - but that extra expense is generally minimal. Measure first. Optimize as needed. Specificity is likely not your low hanging fruit. When it comes to CSS, selector performance optimization, improvements will only be in microseconds. There are other [ways to optimize CSS](https://developer.mozilla.org/en-US/docs/Learn/Performance/CSS_performance), such as minification, and separating defered CSS into non-blocking requests by using media queries.

### Render Tree

The render tree captures both the content and the styles: the DOM and CSSOM trees are combined into the render tree. To construct the render tree, the browser checks every node, starting from root of the DOM tree, and determine which CSS rules are attached.

The render tree only captures visible content. The head section (generally) doesn't contain any visible information, and is therefore not included in the render tree. If there's a display: none; set on an element, neither it, nor any of its descendants, are in the render tree.

### Layout

Once the render tree is built, layout becomes possible. Layout is dependent on the size of screen. The layout step determines where and how the elements are positioned on the page, determining the width and height of each element, and where they are in relation to each other.

What is the width of an element? Block level elements, by definition, have a default width of 100% of the width of their parent. An element with a width of 50%, will be half of the width of its parent. Unless otherwise defined, the body has a width of 100%, meaning it will be 100% of the width of the viewport. This width of the device impacts layout.

The viewport meta tag defines the width of the layout viewport, impacting the layout. Without it, the browser uses the default viewport width, which on by-default full screen browsers is generally 960px. On by-default full screen browsers, like your phone's browser, by setting `<meta name="viewport" content="width=device-width">`, the width will be the width of the device instead of the default viewport width. The device-width changes when a user rotates their phone between landscape and portrait mode. Layout happens every time a device is rotated or browser is otherwise resized.

Layout performance is impacted by the DOM -- the greater the number of nodes, the longer layout takes. Layout can become a bottleneck, leading to jank if required during scrolling or other animations. While a 20ms delay on load or orientation change may be fine, it will lead to jank on animation or scroll. Any time the render tree is modified, such as by added nodes, altered content, or updated box model styles on a node, layout occurs.

To reduce the frequency and duration of layout events, batch updates and avoid animating box model properties.

### Paint

The last step is painting the pixels to the screen. Once the render tree is created and layout occurs, the pixels can be painted to the screen. Onload, the entire screen is painted. After that, only impacted areas of the screen will be repainted, as browsers are optimized to repaint the minimum area required. Paint time depends on what kind of updates are being applied to the render tree. While painting is a very fast process, and therefore likely not the most impactful place to focus on in improving performance, it is important to remember to allow for both layout and re-paint times when measuring how long an animation frame may take. The styles applied to each node increase the paint time, but removing style that increases the paint by 0.001ms may not give you the biggest bang for your optimization buck. Remember to measure first. Then you can determine whether it should be an optimization priority.




![https://zeo.org/wp-content/uploads/2018/11/image26.png](https://zeo.org/wp-content/uploads/2018/11/image26.png)

### References 

Here you find the links where I get all this stuff, they're very useful at anytime.

[Site Hızı Optimizasyonu Öncesi Bilmeniz Gerekenler - Zeo Agency Blog](https://zeo.org/tr/blog/sayfa-yuklenme-hizi-optimizasyonu/)

[Critical rendering path](https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path)

[How Browsers Work: Behind the scenes of modern web browsers - HTML5 Rocks](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#The_browsers_we_will_talk_about)

[Rendering Performance | Web Fundamentals | Google Developers](https://developers.google.com/web/fundamentals/performance/rendering)