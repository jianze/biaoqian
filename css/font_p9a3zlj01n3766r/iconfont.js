;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-jia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M64.06656 481.055744l895.171584 0 0 47.425536-895.171584 0 0-47.425536Z"  ></path>' +
    '' +
    '<path d="M487.938048 57.182208l47.427584 0 0 895.14496-47.427584 0 0-895.14496Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-naozhong" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M513.450667 186.146133c-207.394133 0-375.466667 168.106667-375.466667 375.466667 0 94.1056 34.7136 180.0704 91.938133 245.9648l-87.825067 107.6736 26.436267 21.572267 85.111467-104.2944c67.447467 64.699733 158.941867 104.533333 259.822933 104.533333 101.102933 0 192.802133-40.0384 260.317867-105.028267l85.060267 104.925867 26.538667-21.504-87.893333-108.4416c56.9344-65.826133 91.4432-151.569067 91.4432-245.4016C888.917333 354.2528 720.776533 186.146133 513.450667 186.146133zM513.450667 902.912c-188.2112 0-341.333333-153.105067-341.333333-341.2992 0-188.228267 153.122133-341.333333 341.333333-341.333333s341.333333 153.105067 341.333333 341.333333C854.784 749.824 701.661867 902.912 513.450667 902.912z"  ></path>' +
    '' +
    '<path d="M359.099733 83.712 257.706667 83.712c-94.2592 0-170.666667 76.407467-170.666667 170.666667l0 102.7072 48.5376 0L359.099733 132.283733 359.099733 83.712zM324.9664 118.2208 121.361067 322.952533 121.173333 322.952533l0-68.573867c0-75.264 61.252267-136.533333 136.533333-136.533333l67.259733 0L324.9664 118.2208z"  ></path>' +
    '' +
    '<path d="M769.706667 83.712l-101.461333 0 0 48.571733 223.573333 224.802133L940.373333 357.085867l0-102.7072C940.373333 160.119467 863.931733 83.712 769.706667 83.712zM906.24 322.952533l-0.238933 0L702.3616 118.2208 702.3616 117.845333 769.706667 117.845333c75.281067 0 136.533333 61.269333 136.533333 136.533333L906.24 322.952533z"  ></path>' +
    '' +
    '<path d="M496.64 561.578667 308.462933 561.578667 308.462933 595.712 530.773333 595.712 530.773333 288.512 496.64 288.512Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fangdajing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M920.630724 923.502122c-10.476609 10.289344-27.504424 10.289344-37.981033 0L667.709341 711.968357c-59.987233 47.863101-136.334062 76.680427-219.584114 76.680427C255.473509 788.648784 99.282191 634.954333 99.282191 445.282482 99.282191 255.67817 255.473509 101.986789 448.125227 101.986789c192.674231 0 348.866572 153.691381 348.866572 343.295694 0 88.678692-34.458813 169.242566-90.515526 230.132354l214.153428 210.700793C931.110403 896.448976 931.110403 913.14524 920.630724 923.502122L920.630724 923.502122 920.630724 923.502122zM448.125227 154.852834c-162.978908 0-295.215652 130.067334-295.215652 290.428625 0 160.453389 132.236743 290.523793 295.215652 290.523793 163.072029 0 295.239188-130.070404 295.239188-290.523793C743.364415 284.921191 611.19828 154.852834 448.125227 154.852834L448.125227 154.852834 448.125227 154.852834zM448.125227 154.852834"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)