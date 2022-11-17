import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import { styled } from "@mui/system";
import React, { useContext } from "react";
import apiClient from "../../../../api/client";
import { SortActionsContext, SortContext } from "./sortState";
import { SurveyListActionsContext, SurveyListContext } from "./surveyState";

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledButton = styled("button")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 130px;
  margin-top: 20px;
  padding: 12px;
  border-radius: 12px;
  text-align: left;
  line-height: 1.5;
  background: ${"#0064FF"};
  border: 1px solid ${grey[200]};
  color: ${"#F5F6FA"};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${"#202632"};
    border-color: ${grey[300]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    border-color: ${blue[400]};
    outline: 3px solid ${blue[200]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 130px;
  border-radius: 12px;
  text-align: left;
  overflow: auto;
  outline: 0px;
  background: ${"#fff"};
  border: 1px solid ${grey[200]};
  color: ${grey[900]};
  box-shadow: 0px 4px 30px ${grey[200]};
  `
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${blue[100]};
    color: ${blue[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${grey[100]};
    color: ${grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${blue[100]};
    color: ${blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${grey[100]};
    color: ${grey[900]};
  }
  `
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} ref={ref} components={components} />;
});

export default function PreferenceSortSelect() {
  const { setPreferenceList } = useContext(SurveyListActionsContext);
  const { setPreferenceSort } = useContext(SortActionsContext);

  // 관심사 페이지에서 최신순 데이터 불러오기
  const fetchPreferenceRecentSurvey = async () => {
    // TODO: url 주소 변경 필요
    const response = await apiClient.get("/api/v1/users/my/surveys", {
      params: {
        page: 0,
        size: 5,
        sort: "createdAt,desc",
      },
    });
    setPreferenceList(response.data.data.content);
    setPreferenceSort("new");
  };

  // 관심사 페이지에서 참여한 설문 참여자 많은 순 데이터 불러오기
  const fetchPreferenceFamousSurvey = async () => {
    // TODO: url 주소 변경 필요
    const response = await apiClient.get("/api/v1/users/my/surveys", {
      params: {
        page: 0,
        size: 5,
        sort: "surveyeeCount,desc",
      },
    });
    setPreferenceList(response.data.data.content);
    setPreferenceSort("hot");
  };
  const handleChange = (e) => {
    if (e.target.innerHTML === "최신순") {
      fetchPreferenceRecentSurvey();
    } else {
      fetchPreferenceFamousSurvey();
    }
  };

  React.useEffect(() => {
    fetchPreferenceRecentSurvey();
  }, []);

  return (
    <CustomSelect defaultValue={"new"} onChange={handleChange}>
      <StyledOption value={"new"}>최신순</StyledOption>
      <StyledOption value={"hot"}>참여자 많은순</StyledOption>
    </CustomSelect>
  );
}
