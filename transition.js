const options = [
    {
      from: '(.home)',
      to: '(.mh-skills)',
      in: (next, infos) => {
        document.querySelector('#home').style.opacity = 0;
        gsap.to(document.querySelector('#mh-skills'), {
          duration: 0.5,
          opacity: 1,
          onComplete: next
        });
      },
      out: (next, infos) => {
        document.querySelector('#mh-skills').style.opacity = 1;
        gsap.to(document.querySelector('#home'), 0.5, {
          duration: 0.5,
          opacity: 0,
          onComplete: next
        });
      }
    }
  ];
  
  const swup = new Swup({
    plugins: [new SwupJsPlugin(options)]
  });