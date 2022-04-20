import Flags from "country-flag-icons/react/3x2";
import { hasFlag } from "country-flag-icons";

const Flag = ({ countryCode }: { countryCode: string }) => {
  if (!hasFlag(countryCode)) return null;
  switch (countryCode) {
    case "BD":
      return <Flags.BD />;
    case "BE":
      return <Flags.BE />;
    case "BF":
      return <Flags.BF />;
    case "BG":
      return <Flags.BG />;
    case "BA":
      return <Flags.BA />;
    case "BB":
      return <Flags.BB />;
    case "WF":
      return <Flags.WF />;
    case "BL":
      return <Flags.BL />;
    case "BM":
      return <Flags.BM />;
    case "BN":
      return <Flags.BN />;
    case "BO":
      return <Flags.BO />;
    case "BH":
      return <Flags.BH />;
    case "BI":
      return <Flags.BI />;
    case "BJ":
      return <Flags.BJ />;
    case "BT":
      return <Flags.BT />;
    case "JM":
      return <Flags.JM />;
    case "BV":
      return <Flags.BV />;
    case "BW":
      return <Flags.BW />;
    case "WS":
      return <Flags.WS />;
    case "BQ":
      return <Flags.BQ />;
    case "BR":
      return <Flags.BR />;
    case "BS":
      return <Flags.BS />;
    case "JE":
      return <Flags.JE />;
    case "BY":
      return <Flags.BY />;
    case "BZ":
      return <Flags.BZ />;
    case "RU":
      return <Flags.RU />;
    case "RW":
      return <Flags.RW />;
    case "RS":
      return <Flags.RS />;
    case "TL":
      return <Flags.TL />;
    case "RE":
      return <Flags.RE />;
    case "TM":
      return <Flags.TM />;
    case "TJ":
      return <Flags.TJ />;
    case "RO":
      return <Flags.RO />;
    case "TK":
      return <Flags.TK />;
    case "GW":
      return <Flags.GW />;
    case "GU":
      return <Flags.GU />;
    case "GT":
      return <Flags.GT />;
    case "GS":
      return <Flags.GS />;
    case "GR":
      return <Flags.GR />;
    case "GQ":
      return <Flags.GQ />;
    case "GP":
      return <Flags.GP />;
    case "JP":
      return <Flags.JP />;
    case "GY":
      return <Flags.GY />;
    case "GG":
      return <Flags.GG />;
    case "GF":
      return <Flags.GF />;
    case "GE":
      return <Flags.GE />;
    case "GD":
      return <Flags.GD />;
    case "GB":
      return <Flags.GB />;
    case "GA":
      return <Flags.GA />;
    case "SV":
      return <Flags.SV />;
    case "GN":
      return <Flags.GN />;
    case "GM":
      return <Flags.GM />;
    case "GL":
      return <Flags.GL />;
    case "GI":
      return <Flags.GI />;
    case "GH":
      return <Flags.GH />;
    case "OM":
      return <Flags.OM />;
    case "TN":
      return <Flags.TN />;
    case "JO":
      return <Flags.JO />;
    case "HR":
      return <Flags.HR />;
    case "HT":
      return <Flags.HT />;
    case "HU":
      return <Flags.HU />;
    case "HK":
      return <Flags.HK />;
    case "HN":
      return <Flags.HN />;
    case "HM":
      return <Flags.HM />;
    case "VE":
      return <Flags.VE />;
    case "PR":
      return <Flags.PR />;
    case "PS":
      return <Flags.PS />;
    case "PW":
      return <Flags.PW />;
    case "PT":
      return <Flags.PT />;
    case "SJ":
      return <Flags.SJ />;
    case "PY":
      return <Flags.PY />;
    case "IQ":
      return <Flags.IQ />;
    case "PA":
      return <Flags.PA />;
    case "PF":
      return <Flags.PF />;
    case "PG":
      return <Flags.PG />;
    case "PE":
      return <Flags.PE />;
    case "PK":
      return <Flags.PK />;
    case "PH":
      return <Flags.PH />;
    case "PN":
      return <Flags.PN />;
    case "PL":
      return <Flags.PL />;
    case "PM":
      return <Flags.PM />;
    case "ZM":
      return <Flags.ZM />;
    case "EH":
      return <Flags.EH />;
    case "EE":
      return <Flags.EE />;
    case "EG":
      return <Flags.EG />;
    case "ZA":
      return <Flags.ZA />;
    case "EC":
      return <Flags.EC />;
    case "IT":
      return <Flags.IT />;
    case "VN":
      return <Flags.VN />;
    case "SB":
      return <Flags.SB />;
    case "ET":
      return <Flags.ET />;
    case "SO":
      return <Flags.SO />;
    case "ZW":
      return <Flags.ZW />;
    case "SA":
      return <Flags.SA />;
    case "ES":
      return <Flags.ES />;
    case "ER":
      return <Flags.ER />;
    case "ME":
      return <Flags.ME />;
    case "MD":
      return <Flags.MD />;
    case "MG":
      return <Flags.MG />;
    case "MF":
      return <Flags.MF />;
    case "MA":
      return <Flags.MA />;
    case "MC":
      return <Flags.MC />;
    case "UZ":
      return <Flags.UZ />;
    case "MM":
      return <Flags.MM />;
    case "ML":
      return <Flags.ML />;
    case "MO":
      return <Flags.MO />;
    case "MN":
      return <Flags.MN />;
    case "MH":
      return <Flags.MH />;
    case "MK":
      return <Flags.MK />;
    case "MU":
      return <Flags.MU />;
    case "MT":
      return <Flags.MT />;
    case "MW":
      return <Flags.MW />;
    case "MV":
      return <Flags.MV />;
    case "MQ":
      return <Flags.MQ />;
    case "MP":
      return <Flags.MP />;
    case "MS":
      return <Flags.MS />;
    case "MR":
      return <Flags.MR />;
    case "IM":
      return <Flags.IM />;
    case "UG":
      return <Flags.UG />;
    case "TZ":
      return <Flags.TZ />;
    case "MY":
      return <Flags.MY />;
    case "MX":
      return <Flags.MX />;
    case "IL":
      return <Flags.IL />;
    case "FR":
      return <Flags.FR />;
    case "IO":
      return <Flags.IO />;
    case "SH":
      return <Flags.SH />;
    case "FI":
      return <Flags.FI />;
    case "FJ":
      return <Flags.FJ />;
    case "FK":
      return <Flags.FK />;
    case "FM":
      return <Flags.FM />;
    case "FO":
      return <Flags.FO />;
    case "NI":
      return <Flags.NI />;
    case "NL":
      return <Flags.NL />;
    case "NO":
      return <Flags.NO />;
    case "NA":
      return <Flags.NA />;
    case "VU":
      return <Flags.VU />;
    case "NC":
      return <Flags.NC />;
    case "NE":
      return <Flags.NE />;
    case "NF":
      return <Flags.NF />;
    case "NG":
      return <Flags.NG />;
    case "NZ":
      return <Flags.NZ />;
    case "NP":
      return <Flags.NP />;
    case "NR":
      return <Flags.NR />;
    case "NU":
      return <Flags.NU />;
    case "CK":
      return <Flags.CK />;
    case "XK":
      return <Flags.XK />;
    case "CI":
      return <Flags.CI />;
    case "CH":
      return <Flags.CH />;
    case "CO":
      return <Flags.CO />;
    case "CN":
      return <Flags.CN />;
    case "CM":
      return <Flags.CM />;
    case "CL":
      return <Flags.CL />;
    case "CC":
      return <Flags.CC />;
    case "CA":
      return <Flags.CA />;
    case "CG":
      return <Flags.CG />;
    case "CF":
      return <Flags.CF />;
    case "CD":
      return <Flags.CD />;
    case "CZ":
      return <Flags.CZ />;
    case "CY":
      return <Flags.CY />;
    case "CX":
      return <Flags.CX />;
    case "CR":
      return <Flags.CR />;
    case "CW":
      return <Flags.CW />;
    case "CV":
      return <Flags.CV />;
    case "CU":
      return <Flags.CU />;
    case "SZ":
      return <Flags.SZ />;
    case "SY":
      return <Flags.SY />;
    case "SX":
      return <Flags.SX />;
    case "KG":
      return <Flags.KG />;
    case "KE":
      return <Flags.KE />;
    case "SS":
      return <Flags.SS />;
    case "SR":
      return <Flags.SR />;
    case "KI":
      return <Flags.KI />;
    case "KH":
      return <Flags.KH />;
    case "KN":
      return <Flags.KN />;
    case "KM":
      return <Flags.KM />;
    case "ST":
      return <Flags.ST />;
    case "SK":
      return <Flags.SK />;
    case "KR":
      return <Flags.KR />;
    case "SI":
      return <Flags.SI />;
    case "KP":
      return <Flags.KP />;
    case "KW":
      return <Flags.KW />;
    case "SN":
      return <Flags.SN />;
    case "SM":
      return <Flags.SM />;
    case "SL":
      return <Flags.SL />;
    case "SC":
      return <Flags.SC />;
    case "KZ":
      return <Flags.KZ />;
    case "KY":
      return <Flags.KY />;
    case "SG":
      return <Flags.SG />;
    case "SE":
      return <Flags.SE />;
    case "SD":
      return <Flags.SD />;
    case "DO":
      return <Flags.DO />;
    case "DM":
      return <Flags.DM />;
    case "DJ":
      return <Flags.DJ />;
    case "DK":
      return <Flags.DK />;
    case "VG":
      return <Flags.VG />;
    case "DE":
      return <Flags.DE />;
    case "YE":
      return <Flags.YE />;
    case "DZ":
      return <Flags.DZ />;
    case "US":
      return <Flags.US />;
    case "UY":
      return <Flags.UY />;
    case "YT":
      return <Flags.YT />;
    case "UM":
      return <Flags.UM />;
    case "LB":
      return <Flags.LB />;
    case "LC":
      return <Flags.LC />;
    case "LA":
      return <Flags.LA />;
    case "TV":
      return <Flags.TV />;
    case "TW":
      return <Flags.TW />;
    case "TT":
      return <Flags.TT />;
    case "TR":
      return <Flags.TR />;
    case "LK":
      return <Flags.LK />;
    case "LI":
      return <Flags.LI />;
    case "LV":
      return <Flags.LV />;
    case "TO":
      return <Flags.TO />;
    case "LT":
      return <Flags.LT />;
    case "LU":
      return <Flags.LU />;
    case "LR":
      return <Flags.LR />;
    case "LS":
      return <Flags.LS />;
    case "TH":
      return <Flags.TH />;
    case "TF":
      return <Flags.TF />;
    case "TG":
      return <Flags.TG />;
    case "TD":
      return <Flags.TD />;
    case "TC":
      return <Flags.TC />;
    case "LY":
      return <Flags.LY />;
    case "VA":
      return <Flags.VA />;
    case "VC":
      return <Flags.VC />;
    case "AE":
      return <Flags.AE />;
    case "AD":
      return <Flags.AD />;
    case "AG":
      return <Flags.AG />;
    case "AF":
      return <Flags.AF />;
    case "AI":
      return <Flags.AI />;
    case "VI":
      return <Flags.VI />;
    case "IS":
      return <Flags.IS />;
    case "IR":
      return <Flags.IR />;
    case "AM":
      return <Flags.AM />;
    case "AL":
      return <Flags.AL />;
    case "AO":
      return <Flags.AO />;
    case "AQ":
      return <Flags.AQ />;
    case "AS":
      return <Flags.AS />;
    case "AR":
      return <Flags.AR />;
    case "AU":
      return <Flags.AU />;
    case "AT":
      return <Flags.AT />;
    case "AW":
      return <Flags.AW />;
    case "IN":
      return <Flags.IN />;
    case "AX":
      return <Flags.AX />;
    case "AZ":
      return <Flags.AZ />;
    case "IE":
      return <Flags.IE />;
    case "ID":
      return <Flags.ID />;
    case "UA":
      return <Flags.UA />;
    case "QA":
      return <Flags.QA />;
    case "MZ":
      return <Flags.MZ />;
  }
  return null;
};

export { Flag };
