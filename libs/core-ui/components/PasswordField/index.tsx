/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, Popover } from "antd";
import { TooltipPlacement } from "antd/lib/tooltip";
import clsx from "clsx";
import { useState } from "react";
import CheckCircleIcon from "../Icon/CheckCircleIcon";
import CloseCircleIcon from "../Icon/CloseCircleIcon";
import t from "./../../../locale";
import { FieldStyled } from "./styled";
import {
  EyeFilled,
  EyeInvisibleFilled
} from '@ant-design/icons';
export interface PasswordFieldProps {
  rules?: [any];
  onChange: (isValidate: boolean, value: string) => void;
  placeholder?: string;
}

const PasswordField = (props: PasswordFieldProps) => {
  const [min10Chars, setMin10Chars] = useState(false);
  const [containsUpperCase, setContainsUpperCase] = useState(false);
  const [containsLowerCase, setContainsLowerCase] = useState(false);
  const [containsSpecialChars, setContainsSpecialChars] = useState(false);
  const [containsNumber, setContainsNumber] = useState(false);
  const [notContainsSpace, setNotContainsSpace] = useState(false);

  const [isValidate, setIsValidate] = useState(true);

  const onChangePass = (e: any) => {
    const value = e.target.value;

    const width = document?.body?.clientWidth;
    if (width <= 1026) setPlacement("top");
    else setPlacement("left");

    const _notContainSpace = !value.includes(" ");
    const _min10Chars = value.length >= 10;
    const _containsLowerCase = /[a-z]/.test(value);
    const _containsUpperCase = /[A-Z]/.test(value);
    const _containsNumberCase = /[0-9]/.test(value);
    // eslint-disable-next-line no-useless-escape
    const _containsSpecialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(
      value
    );

    setNotContainsSpace(_notContainSpace);
    setMin10Chars(_min10Chars);
    setContainsLowerCase(_containsLowerCase);
    setContainsUpperCase(_containsUpperCase);
    setContainsNumber(_containsNumberCase);
    setContainsSpecialChars(_containsSpecialChar);

    if (
      _notContainSpace &&
      _min10Chars &&
      _containsLowerCase &&
      _containsUpperCase &&
      _containsNumberCase &&
      _containsSpecialChar
    ) {
      props.onChange(true, value);
      setIsValidate(true);
    } else {
      props.onChange(false, value);
      setIsValidate(false);
    }
  };

  const renderCheckItem = (text: string, isSuccess: boolean) => {
    return (
      <div className="check-item">
        <div className="icon">
          {isSuccess ? <CheckCircleIcon /> : <CloseCircleIcon />}
        </div>
        <div className={clsx("content", isSuccess && "success")}>{text}</div>
      </div>
    );
  };

  const [placement, setPlacement] = useState<TooltipPlacement>("left");

  return (
    <FieldStyled
      className={clsx(isValidate ? "" : "fail")}
      data-tip
      data-for={"password-validate-field"}
      data-event="click focus"
    >
      <Popover
        content={
          <div className="check-list-group">
            {renderCheckItem(t("error.min_10_chars"), min10Chars)}
            {renderCheckItem(
              t("error.should_contain_uppercase"),
              containsUpperCase
            )}
            {renderCheckItem(
              t("error.should_contain_lowercase"),
              containsLowerCase
            )}
            {renderCheckItem(
              t("error.should_contain_special_char"),
              containsSpecialChars
            )}
            {renderCheckItem(
              t("error.should_contain_number"),
              containsNumber
            )}
            {renderCheckItem(
              t("error.should_not_contain_space"),
              notContainsSpace
            )}
          </div>
        }
        placement={placement}
        trigger="focus"
      >
        <Input.Password
          bordered={false}
          onChange={onChangePass}
          autoComplete="new-password"
          placeholder={props.placeholder || "Password"}
          iconRender={(visible) => (visible ? <EyeFilled/> : <EyeInvisibleFilled/>)}
        />
      </Popover>
    </FieldStyled>
  );
};

export { PasswordField };
