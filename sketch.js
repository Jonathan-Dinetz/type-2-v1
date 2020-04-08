var rule = CSSRulePlugin.getRule('span:after');



gsap.set(".ball", {xPercent: -50, yPercent: -50});

var ball = document.querySelector(".ball");
var pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
var mouse = { x: pos.x, y: pos.y };
var speed = 0.1;

var xSet = gsap.quickSetter(ball, "x", "px");
var ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", e => {
  mouse.x = e.x;
  mouse.y = e.y;
});

gsap.ticker.add(() => {
  pos.x += (mouse.x - pos.x) * speed;
  pos.y += (mouse.y - pos.y) * speed;
  xSet(pos.x);
  ySet(pos.y);
});

var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.staggerFrom(".box", 2.75, {
  opacity: 0,
  cycle: {
    y: [-50, 50]
  },
   ease: Expo.easeOut,
  stagger: {
    from: "center",
    amount: 0.25
  }
});

var scene = new ScrollMagic.Scene({
  triggerElement: "#stage",
  triggerHook: 0
})
  .addIndicators({
    colorTrigger: "black",
    colorStart: "black",
    colorEnd: "black",
    indent: 5
  })
  .setTween(tl)
  .addTo(controller);

  var controller = new ScrollMagic.Controller();
  var tl = new TimelineMax();
  tl.staggerFrom(".caption", 4.25, {
    scale: 1,
    opacity: 0,
    cycle: {
      y: [-50, 50]
    },
     ease: Power1.easeOut,
    stagger: {
      from: "center",
      amount: 0.75
    }
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: "#stage",
    triggerHook: 0
  })
    .addIndicators({
      colorTrigger: "white",
      colorStart: "white",
      colorEnd: "white",
      indent: 5
    })
    .setTween(tl)
    .addTo(controller);




    var controller = new ScrollMagic.Controller();
    var tl = new TimelineMax();
    tl.staggerFrom(".box1", 2.75, {
      opacity: 0,
      cycle: {
        y: [-50, 50]
      },
       ease: Expo.easeOut,
      stagger: {
        from: "center",
        amount: 0.25
      }
    });

    var scene = new ScrollMagic.Scene({
      triggerElement: "#stage6",
      triggerHook: 0
    })
      .addIndicators({
        colorTrigger: "black",
        colorStart: "black",
        colorEnd: "black",
        indent: 5
      })
      .setTween(tl)
      .addTo(controller);

      var controller = new ScrollMagic.Controller();
      var tl = new TimelineMax();
      tl.staggerFrom(".caption1", 4.25, {
        scale: 1,
        opacity: 0,
        cycle: {
          y: [-50, 50]
        },
         ease: Power1.easeOut,
        stagger: {
          from: "center",
          amount: 0.75
        }
      });



      var scene = new ScrollMagic.Scene({
        triggerElement: "#stage6",
        triggerHook: 0
      })
        .addIndicators({
          colorTrigger: "white",
          colorStart: "white",
          colorEnd: "white",
          indent: 5
        })
        .setTween(tl)
        .addTo(controller);


            var controller = new ScrollMagic.Controller();
            var tl = new TimelineMax();
            tl.staggerFrom(".box2", 2.75, {
              opacity: 0,
              cycle: {
                y: [-50, 50]
              },
               ease: Expo.easeOut,
              stagger: {
                from: "center",
                amount: 0.25
              }
            });

            var scene = new ScrollMagic.Scene({
              triggerElement: "#stage7",
              triggerHook: 0
            })
              .addIndicators({
                colorTrigger: "black",
                colorStart: "black",
                colorEnd: "black",
                indent: 5
              })
              .setTween(tl)
              .addTo(controller);

              var controller = new ScrollMagic.Controller();
              var tl = new TimelineMax();
              tl.staggerFrom(".caption2", 4.25, {
                scale: 1,
                opacity: 0,
                cycle: {
                  y: [-50, 50]
                },
                 ease: Power1.easeOut,
                stagger: {
                  from: "center",
                  amount: 0.75
                }
              });



              var scene = new ScrollMagic.Scene({
                triggerElement: "#stage7",
                triggerHook: 0
              })
                .addIndicators({
                  colorTrigger: "white",
                  colorStart: "white",
                  colorEnd: "white",
                  indent: 5
                })
                .setTween(tl)
                .addTo(controller);




                var controller = new ScrollMagic.Controller();
                var tl = new TimelineMax();
                tl.staggerFrom(".box3", 2.75, {
                  opacity: 0,
                  cycle: {
                    y: [-50, 50]
                  },
                   ease: Expo.easeOut,
                  stagger: {
                    from: "center",
                    amount: 0.25
                  }
                });

                var scene = new ScrollMagic.Scene({
                  triggerElement: "#stage8",
                  triggerHook: 0
                })
                  .addIndicators({
                    colorTrigger: "black",
                    colorStart: "black",
                    colorEnd: "black",
                    indent: 5
                  })
                  .setTween(tl)
                  .addTo(controller);

                  var controller = new ScrollMagic.Controller();
                  var tl = new TimelineMax();
                  tl.staggerFrom(".caption3", 4.25, {
                    scale: 1,
                    opacity: 0,
                    cycle: {
                      y: [-50, 50]
                    },
                     ease: Power1.easeOut,
                    stagger: {
                      from: "center",
                      amount: 0.75
                    }
                  });

                  var scene = new ScrollMagic.Scene({
                    triggerElement: "#stage8",
                    triggerHook: 0
                  })
                    .addIndicators({
                      colorTrigger: "black",
                      colorStart: "black",
                      colorEnd: "black",
                      indent: 5
                    })
                    .setTween(tl)
                    .addTo(controller);
                    var controller = new ScrollMagic.Controller();
                    var tl = new TimelineMax();
                    tl.staggerFrom(".box4", 2.75, {
                      opacity: 0,
                      cycle: {
                        y: [-50, 50]
                      },
                       ease: Expo.easeOut,
                      stagger: {
                        from: "center",
                        amount: 0.25
                      }
                    });

                    var scene = new ScrollMagic.Scene({
                      triggerElement: "#stage9",
                      triggerHook: 0
                    })
                      .addIndicators({
                        colorTrigger: "black",
                        colorStart: "black",
                        colorEnd: "black",
                        indent: 5
                      })
                      .setTween(tl)
                      .addTo(controller);

                      var controller = new ScrollMagic.Controller();
                      var tl = new TimelineMax();
                      tl.staggerFrom(".caption4", 4.25, {
                        scale: 1,
                        opacity: 0,
                        cycle: {
                          y: [-50, 50]
                        },
                         ease: Power1.easeOut,
                        stagger: {
                          from: "center",
                          amount: 0.75
                        }
                      });

                      var scene = new ScrollMagic.Scene({
                        triggerElement: "#stage9",
                        triggerHook: 0
                      })
                        .addIndicators({
                          colorTrigger: "black",
                          colorStart: "black",
                          colorEnd: "black",
                          indent: 5
                        })
                        .setTween(tl)
                        .addTo(controller);0

                      var controller = new ScrollMagic.Controller();
                      var tl = new TimelineMax();
                      tl.staggerFrom(".box5", 2.75, {
                        opacity: 0,
                        cycle: {
                          y: [-50, 50]
                        },
                         ease: Expo.easeOut,
                        stagger: {
                          from: "center",
                          amount: 0.25
                        }
                      });

                      var scene = new ScrollMagic.Scene({
                        triggerElement: "#stage10",
                        triggerHook: 0
                      })
                        .addIndicators({
                          colorTrigger: "black",
                          colorStart: "black",
                          colorEnd: "black",
                          indent: 5
                        })
                        .setTween(tl)
                        .addTo(controller);

                        var controller = new ScrollMagic.Controller();
                        var tl = new TimelineMax();
                        tl.staggerFrom(".caption5", 4.25, {
                          scale: 1,
                          opacity: 0,
                          cycle: {
                            y: [-50, 50]
                          },
                           ease: Power1.easeOut,
                          stagger: {
                            from: "center",
                            amount: 0.75
                          }
                        });

                        var scene = new ScrollMagic.Scene({
                          triggerElement: "#stage10",
                          triggerHook: 0
                        })
                          .addIndicators({
                            colorTrigger: "black",
                            colorStart: "black",
                            colorEnd: "black",
                            indent: 5
                          })
                          .setTween(tl)
                          .addTo(controller);

    var controller = new ScrollMagic.Controller();
    var tl = new TimelineMax();
    tl.staggerFrom(".one", 0.75, {
      scale: 1,
      opacity: 0,
      cycle: {
        y: [-50, 50]
      },
       ease: Power1.easeOut,
      stagger: {
        from: "center",
        amount: 0.75
      }
    });

    var scene = new ScrollMagic.Scene({
      triggerElement: "#stage1",
      triggerHook: 0
    })
      .addIndicators({
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white",
        indent: 5
      })
      .setTween(tl)
      .addTo(controller);

      var controller = new ScrollMagic.Controller();
      var tl = new TimelineMax();
      tl.staggerFrom(".two", 0.75, {
        scale: 1,
        opacity: 0,
        cycle: {
          y: [-50, 50]
        },
         ease: Power1.easeOut,
        stagger: {
          from: "center",
          amount: 0.75
        }
      });

      var scene = new ScrollMagic.Scene({
        triggerElement: "#stage2",
        triggerHook: 0
      })
        .addIndicators({
          colorTrigger: "white",
          colorStart: "white",
          colorEnd: "white",
          indent: 5
        })
        .setTween(tl)
        .addTo(controller);

        var controller = new ScrollMagic.Controller();
        var tl = new TimelineMax();
        tl.staggerFrom(".three", 0.75, {
          scale: 1,
          opacity: 0,
          cycle: {
            y: [-50, 50]
          },
           ease: Power1.easeOut,
          stagger: {
            from: "center",
            amount: 0.75
          }
        });

        var scene = new ScrollMagic.Scene({
          triggerElement: "#stage3",
          triggerHook: 0
        })
          .addIndicators({
            colorTrigger: "white",
            colorStart: "white",
            colorEnd: "white",
            indent: 5
          })
          .setTween(tl)
          .addTo(controller);

          var controller = new ScrollMagic.Controller();
          var tl = new TimelineMax();
          tl.staggerFrom(".four", 0.75, {
            scale: 1,
            opacity: 0,
            cycle: {
              y: [-50, 50]
            },
             ease: Power1.easeOut,
            stagger: {
              from: "center",
              amount: 0.75
            }
          });

          var scene = new ScrollMagic.Scene({
            triggerElement: "#stage4",
            triggerHook: 0
          })
            .addIndicators({
              colorTrigger: "white",
              colorStart: "white",
              colorEnd: "white",
              indent: 5
            })
            .setTween(tl)
            .addTo(controller);

            var controller = new ScrollMagic.Controller();
            var tl = new TimelineMax();
            tl.staggerFrom(".byline", 0.75, {
              scale: 1,
              opacity: 0,
              cycle: {
                y: [-50, 50]
              },
               ease: Power1.easeOut,
              stagger: {
                from: "center",
                amount: 0.75
              }
            });

            var scene = new ScrollMagic.Scene({
              triggerElement: "#stage5",
              triggerHook: 0
            })
              .addIndicators({
                colorTrigger: "white",
                colorStart: "white",
                colorEnd: "white",
                indent: 5
              })
              .setTween(tl)
              .addTo(controller);
