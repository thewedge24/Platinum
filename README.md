<h1>
  <b>
    Platinum
  </b>
</h1>

<h2>
  <b>
    How it Works
  </b>
</h2>
<p>
Platinum utilizes <a href="https://github.com/titaniumnetwork-dev/Ultraviolet">Ultraviolet</a>, a proxy backend developed by Titanium Network. While Ultraviolet v3 is a fast and efficient proxy service, its successor, <a href="https://github.com/MercuryWorkshop/scramjet">Scramjet</a>, is currently in development. Although Platinum supports Scramjet, it defaults to Ultraviolet since Scramjet is not yet production-ready.

Additionally, Platinum integrates <a href="https://github.com/binary-person/rammerhead">Rammerhead</a>, a proxy service that strikes a balance between speed and site compatibility.
</p>
<p>
If you've used proxy sites like <a href="https://github.com/UseInterstellar/Interstellar">Interstellar</a> before, you may have noticed that they are neither fast nor powerful. This is because platforms like Interstellar rely on outdated proxy services such as Ultraviolet <b><i>v2</i></b> and <a href="https://github.com/NebulaServices/Dynamic">Dynamic</a>. Ultraviolet v2, which is built on Bare, is both old and insecure, while Dynamic suffers from slow performance and limited site compatibility.
</p>
<h1>
  <b>
    Supported Sites
  </b>
</h1>
<p>
  Some popular sites that Platinum supports are:

  - <b>GeForce NOW</b><br>
  - <b>Now.gg</b><br>
  - <b>Discord</b><br>
  - <b>Youtube</b><br>
  - <b>TikTok</b><br>
</p>
<h1>
  <b>
    Usage
  </b>
</h1>
<p>
  To use Platinum, you must deploy it. You <b><i>CANNOT</i></b> deploy to services such as:
  
  - <b>Vercel</b><br>
  - <b>Netlify</b><br>
  - <b>Github Pages</b><br>
  - <b>Cloudflare Pages</b><br>

  because they either do not support Wisp, service workers, or are static.<br>

  You CAN deploy to:<br><br> <b>
  - Render<br>
  - Codeanywhere<br>
  - Gitpod<br>
  - Koyeb<br>
  - CodeSandbox<br>
  - Github Codespaces<br>
  - Railway<br></b>
</p>
<h1>
  <b>
    Local Usage
  </b>
</h1>
<p>
  This is a Node JS application with npm packages. You must first run:
  
  ```bash
  pnpm i
  ```
  <br>
  then run
  
  ```bash
  pnpm start
  ```
  
  You should have Platinum running locally on <b>localhost:8080</b>!
</p>
