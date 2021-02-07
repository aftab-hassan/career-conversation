// import "./styles.css";
import * as React from "react";
import { useId } from "@uifabric/react-hooks";
import {
  getTheme,
  mergeStyleSets,
  FontWeights,
  ContextualMenu,
  Toggle,
  DefaultButton,
  Modal,
  IDragOptions,
  IconButton,
  IIconProps,
  initializeIcons
} from "office-ui-fabric-react";

interface IModalWithImageState {
    isModalOpen: boolean;
}

interface IModalWithImageProps {
    imgSrc: string | undefined;
    isModalOpen: boolean | undefined;
    setIsModalOpen: () => void;
}

const dragOptions: IDragOptions = {
  moveMenuItemText: "Move",
  closeMenuItemText: "Close",
  menu: ContextualMenu
};
const cancelIcon: IIconProps = { iconName: "Cancel" };

const theme = getTheme();
const contentStyles = mergeStyleSets({
  container: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "stretch"
  },
  header: [
    theme.fonts.xLargePlus,
    {
      flex: "1 1 auto",
      borderTop: `4px solid ${theme.palette.themePrimary}`,
      color: theme.palette.neutralPrimary,
      display: "flex",
      alignItems: "center",
      fontWeight: FontWeights.semibold,
      padding: "12px 12px 14px 24px"
    }
  ],
  body: {
    flex: "4 4 auto",
    padding: "0 24px 24px 24px",
    overflowY: "hidden",
    selectors: {
      p: { margin: "14px 0" },
      "p:first-child": { marginTop: 0 },
      "p:last-child": { marginBottom: 0 }
    }
  }
});
const toggleStyles = { root: { marginBottom: "20px" } };
const iconButtonStyles = {
  root: {
    color: theme.palette.neutralPrimary,
    marginLeft: "auto",
    marginTop: "4px",
    marginRight: "2px"
  },
  rootHovered: {
    color: theme.palette.neutralDark
  }
};

class ModalWithImage extends React.Component<IModalWithImageProps, {}> {
    private hideModal = () => {
        this.props.setIsModalOpen();
    }

    public render() {
        initializeIcons();

        return (
          <div>{
              this.props.imgSrc && 
            <Modal
              isOpen={true}
              onDismiss={this.hideModal}
              isBlocking={false}
              containerClassName={contentStyles.container}
            >
              <div className={contentStyles.header}>
                <span>{this.props.imgSrc}</span>
                <IconButton
                  styles={iconButtonStyles}
                  iconProps={cancelIcon}
                  ariaLabel="Close popup modal"
                  onClick={this.hideModal}
                />
              </div>
              <div className={contentStyles.body}>
                <img src={this.props.imgSrc} />
              </div>
            </Modal>}
          </div>
        );
    }

}

export default ModalWithImage