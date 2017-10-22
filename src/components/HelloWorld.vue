<template>
  <div class="hello">
    <section class="hero">
      <h1 class='silver-line'>
      <span class='h'>H</span><span class='e'>e</span><span class='l1'>l</span><span class='l2'>l</span><span class='o'>o</span><span class='dot'>.</span></h1>
    </section>
    <section class='root one'>
    <header class='header one'>
      <h1 class='h1 one'>Waiting on YHVH</h1>
      <p class='p one'>Welcome to Dave Woodall's me.</p>
    </header>
    <article class='article one'>
      <h1 class='h1 header-h1'>The Internet is here to stay</h1>
      <p class='p one'>
        I graduated the same year the <i>Internet Bubble Burst</i>. I was a Graphic Designer at the time. I figured the web was a fad. It took me nearly 8 years before I realized that I was wrong. Then, another 4 years before I started building web apps using Ruby on Rails. I've been writing code professionally since 2012.
      </p>
      <p class='p one'>
        5 years is hardly anything when it comes to understanding the complexities of what it takes to write software. As such, I still spend my time online coding, reading, and growing. This is one of the many sites I work on to develop my skills.
      </p>
      <p class='p one'>
        Thanks for stopping by!
      </p>
    </article>
    <article class='article one'>
      <h1 class='h1 one'>More... </h1>
      <h2 class='h1'><a href="/trio">Trio (demo)</a> - HTML, CSS, JS play well together</h2>
      <h2 class='h1'><a href="http://www.davewoodall.com">My Resume</a> - ever a WIP</h2>
    </article>
  </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Waiting on YHVH'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  body {
    background: #ece7e5;
    padding: 0;
    margin: 0;
  }


  /* .silver-line */

  .silver-line {
    background: #383636;
    background-image: linear-gradient(-140deg, #2F494B, #3F272D);
    margin-top: -0.1em;
    padding-top: 1em;
    font-size: 5em;
  }
  @media only screen and (min-width: 500px) {
    .silver-line {
      padding-top: 0.8em;
      font-size: 10em;
    }
  }
  @media only screen and (min-width: 800px) {
    .silver-line {
      padding-top: 2em;
      font-size: 12em;
    }
  }
  @media only screen and (min-width: 1300px) {
    .silver-line {
      margin-top: -0.25em;
      padding-top: 1.8em;
      font-size: 15em;
    }
  }

  /* .root  */
  .root {
    font-family: georgia;
    padding-left: 1em;
    padding-right: 1em;
  }
  .root .h1 {
    font-style: italic;
    font-weight: 100;
  }
  .root .p {
    line-height: 28px;
  }
  /*
  @media only screen and (min-width: 500px) {
    .root {
      padding-left: 5em;
      padding-right: 3em;
    }
  }
  @media only screen and (min-width: 800px) {
    .root {
      padding-left: 22em;
      padding-right: 5em;
    }
  }
  @media only screen and (min-width: 1300px) {
    .root {
      padding-left: 30em;
      padding-right: 15em;
    }
  }*/

  .header .p {
    font-size: 1.25em;
  }
  .silver-line span {
    display: inline-block;
    margin: 0;
    padding: 0;
  }

  .h { color: #48cb7d; }
  .e { color: #31f777; }
  .l1 { color: #e4ba80; }
  .l2 { color: #aa9ab6; }
  .o { color: #6cdee6; }
  .dot { color: #ae7dd4; }

  .bio {
    width: 100%;
  }

  .footer .bio img {
    width: 100%;
    transform: rotate(-4deg);
    box-shadow: 1px 2px 2px  #666;
  }

  .footer .bio img {
    width: 100%;
    transform: rotate(-4deg);
    box-shadow: 1px 2px 2px  #666;
  }

  .footer .content {
    float: right;
    text-align: right;
  }
</style>
