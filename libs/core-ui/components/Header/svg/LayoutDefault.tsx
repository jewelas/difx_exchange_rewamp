
function LayoutDefault({theme}:{theme:string}) {
    return (
        <svg width="67" height="57" viewBox="0 0 67 57" fill="none">
            <rect width="67" height="57" rx="2" fill={theme==='dark' ? "#0D1421" : "#FFF"} />
            <rect x="34" y="45" width="15" height="7" fill="#DB5354" />
            <rect x="18" y="45" width="15" height="7" fill="#21C198" />
            <rect x="4" y="6" width="12" height="46" fill={theme==='dark' ? "#161F30" : "#777"} />
            <rect x="51" y="16" width="12" height="36" fill={theme==='dark' ? "#161F30" : "#777"} />
            <rect x="49" y="6" width="8" height="31" transform="rotate(90 49 6)" fill={theme==='dark' ? "#161F30" : "#777"} />
            <rect x="63" y="6" width="8" height="12" transform="rotate(90 63 6)" fill={theme==='dark' ? "#161F30" : "#777"} />
            <rect x="49" y="16" width="27" height="31" transform="rotate(90 49 16)" fill={theme==='dark' ? "#161F30" : "#777"} />
        </svg>

    );
}

export default LayoutDefault;
