import { useTheme } from "./../../../shared";
import NoDataIcon from "./../Icon/NoDataIcon";

export function NoData() {

  const { theme } = useTheme();

  return (
    <div style={{ position: 'absolute', width: '100%', marginTop: '30px', textAlign: "center" }}>
      <div>
        <NoDataIcon />
      </div>
      <div style={{ color: theme === 'dark' ? '#ccc' : '#777' }}>No data</div>
    </div>
  );
}

export default NoData;
