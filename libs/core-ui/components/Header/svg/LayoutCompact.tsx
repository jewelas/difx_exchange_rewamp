
function LayoutCompact({theme}:{theme:string}) {
    return (
        <svg width="67" height="57" viewBox="0 0 67 57" fill="none">
            <rect x="1" y="1" width="65" height="55" rx="1" fill={theme==='dark' ? "#0D1421" : "#FFF"}  strokeWidth="2" />
            <rect x="44" y="5" width="23" height="27" transform="rotate(90 44 5)" fill={theme==='dark' ? "#161F30" : "#777"} />
            <rect x="44" y="29" width="24" height="40" transform="rotate(90 44 29)" fill={theme==='dark' ? "#161F30" : "#777"} />
            <rect x="16" y="5" width="23" height="12" transform="rotate(90 16 5)" fill={theme==='dark' ? "#161F30" : "#777"} />
            <rect x="63" y="5" width="48" height="18" transform="rotate(90 63 5)" fill={theme==='dark' ? "#161F30" : "#777"} />
            <path d="M55 9H62V13H55V9Z" fill="#DB5354" />
            <rect x="46" y="42" width="16" height="7" fill="#21C198" />
            <rect x="46" y="9" width="7" height="4" fill="#21C198" />
        </svg>
    );
}

export default LayoutCompact;
