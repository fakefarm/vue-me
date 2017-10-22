<template>
  <div class="hello">
    <div class="menu"></div>
    <div class="welcome">
      <div class="nav-curtain"></div>
      <section class="hero">
        <div class="header-slant"></div>
        <h1 class='silver-line'>
          <span class='h'>H</span><span class='e'>e</span><span class='l1'>l</span><span class='l2'>l</span><span class='o'>o</span><span class='dot'>.</span></h1>
        </section>
        <section class='root'>
          <header class='header'>
            <div class="header-slant-reverse"></div>
            <h1 class='h1 title'>{{ copy.title }}</h1>
          </header>
          <article class='article'>
            <div class="header-slant"></div>
            <section class="copy">
              <p class='p' ><span v-html='copy.intro'></span> <a class='link' href='http://www.davewoodall.com'>Dave Woodall</a>.</p>
            </section>
          </article>
        </section>
        <div class="secret">
          <h1>{{ copy.salutation }}</h1>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      copy: {
        title: "Welcome to Internetland.",
        welcome: "I'm dave",
        intro: "A personal site by",
        salutation: "I'm learning VueJS and rebuilding my personal page for practice. Check back soon for updates!"
      }
    }
  }
}
</script>

<style scoped>

  .hero {
    position: relative;
    background: #383636;
    background-image: linear-gradient(-140deg, #2F494B, #3F272D);
  }

  .silver-line {
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
      padding-top: 0.85em;
      font-size: 15em;
    }
  }
  .header-slant, .header-slant-reverse  {
    border-left: 120px solid #eef1bd;
    transform: skewX(-17deg) translateX(200px);
    position: absolute;
    right: 0;
    background: #e7ec8b;
    width: 30%;
    height: 100%;
  }

  .header-slant-reverse {
    transform: skewX(17deg) translateX(250px);
  }

  h1, p { margin: 0; }
  .p, .h1 {
    position: relative;
    z-index: 10;
  }

  .header .h1 {
    font-weight: 200;
    padding: 0.35em;
    padding-left: 0.25em;
    font-size: 4.5em;
  }

  .header {
    position: relative;
    background: #48cb7d;
    color:#2F494B;
    margin: 0;
  }
  .article {
    position: relative;
    margin: 0;
    background: #48cb7d;
    width: 83%;
    color:#2F494B;
  }


  .article .copy {
    width: 70%;
    font-size: 1.2em;
    color: #eef1bd;
    line-height: 30px;
    box-sizing: border-box;
    padding: 3em;
  }

  .silver-line span {
    display: inline-block;
    margin: 0;
    padding: 0;
  }

  .link { color: #e4ba80;}

  .h { color: #48cb7d; }
  .e { color: #31f777; }
  .l1 { color: #e4ba80; }
  .l2 { color: #aa9ab6; }
  .o { color: #6cdee6; }
  .dot { color: #ae7dd4; }

  .menu {
    width: 300px;
    height: 100%;
    cursor: pointer;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
  }

  .welcome {
    transition: all 400ms cubic-bezier(.79,.05,.5,.99);
    position: relative;
  }
  .menu:hover + .welcome {
    transition: all 400ms cubic-bezier(.79,.05,.5,.99);
    transform: translateX(-700px);
  }

  .nav-curtain {
    transition: all 600ms cubic-bezier(.79,.05,.5,.99);
    background: rgba(0,0,0,0);
    transform: skewX(-17deg) translateX(0px);
    width: 0px;
  }

  .menu:hover ~ .welcome > .nav-curtain {
    transition: all 600ms cubic-bezier(.79,.05,.5,.99);
    width: 1400px;
    height: 1000px;
    background: rgba(231, 236, 139, 0.5);
    position: absolute;
    z-index: 100;
  }

  .secret {
    transition: all 600ms cubic-bezier(.79,.05,.5,.99);
    opacity: 0;
    position: fixed;
    transform: translateX(30em) translateY(10em);
    top: 0;
    right: 0;
    width: 30%;
    line-height: 40px;
  }

  .menu:hover ~ .welcome > .secret {
    opacity: 1;
  }

</style>
