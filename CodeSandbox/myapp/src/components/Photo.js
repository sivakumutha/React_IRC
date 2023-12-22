import "./Photos.css"
function Photo()
{
    return(
    <>
        
        <h1 style="text-align: center">Infinite Scroll Animation</h1>
        
<div class="scroller" data-speed="fast">
  <ul class="tag-list scroller__inner">
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
    <li>SSG</li>
    <li>webdev</li>
    <li>animation</li>
    <li>UI/UX</li>
  </ul>
</div>

<div class="scroller" data-direction="right" data-speed="slow">
  <div class="scroller__inner">
    <img src="https://i.pravatar.cc/150?img=1" alt="" />
    <img src="https://i.pravatar.cc/150?img=2" alt="" />
    <img src="https://i.pravatar.cc/150?img=3" alt="" />
    <img src="https://i.pravatar.cc/150?img=4" alt="" />
    <img src="https://i.pravatar.cc/150?img=5" alt="" />
    <img src="https://i.pravatar.cc/150?img=6" alt="" />
  </div>
</div>

<a class="yt" href="https://youtu.be/pKHKQwAsZLI">
  Watch the tutorial
</a>
    </>
)
}
export default Photo;