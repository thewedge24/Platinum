<h1 align="center">
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
</p>

<p>
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
</p>
<ul>
  <li><b>GeForce NOW</b></li>
  <li><b>Now.gg</b></li>
  <li><b>Discord</b></li>
  <li><b>Youtube</b></li>
  <li><b>TikTok</b></li>
</ul>

<h1>
  <b>
    Usage
  </b>
</h1>
<p>
  To use Platinum, you must deploy it. You <b><i>CANNOT</i></b> deploy to services such as:
</p>
<ul>
  <li><b>Vercel</b></li>
  <li><b>Netlify</b></li>
  <li><b>Github Pages</b></li>
  <li><b>Cloudflare Pages</b></li>
</ul>

<p>because they either do not support Wisp, service workers, or are static.</p>

<p>You CAN deploy to:</p>
<ul>
  <li><b>Render</b></li>
  <li><b>Codeanywhere</b></li>
  <li><b>Gitpod</b></li>
  <li><b>Koyeb</b></li>
  <li><b>CodeSandbox</b></li>
  <li><b>Github Codespaces</b></li>
  <li><b>Railway</b></li>
  <li><b>Any Vps Provider</b></li>
</ul>

<h1>
  <b>
    Local Usage
  </b>
</h1>
<p>
  This is a Node JS application with npm packages. You must first run:
</p>

<pre><code>pnpm i</code></pre>

<p>then run:</p>

<pre><code>pnpm start</code></pre>

<p>
  You should have Platinum running locally on <b>localhost:8080</b>!
</p>
