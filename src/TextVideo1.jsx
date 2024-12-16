import "./Estilos.css"
export default function TextVideo(args)
{
    return(
        <div className="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/hPBdBlwBh98?si=Y1qu0qqgADTJr8F4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    );
}