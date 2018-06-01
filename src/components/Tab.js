import DesktopComponent, {
  universalPropTypes,
  universalDefaultProps,
} from './DesktopComponent';
import libui from 'libui-node';
import PropTypes from 'prop-types';

class Tab extends DesktopComponent {
  constructor(root, props) {
    super(root, props);
    this.root = root;
    this.props = { ...props };
    this.setDefaults(props);
    this.newElement();
    this.initialProps(this.props);
  }

  newElement() {
    this.element = new libui.UiTab();
  }

  render(parent) {
    this.addParent(parent);
    this.renderChildNode(this);
  }
}

Tab.propTypes = {
  ...universalPropTypes,
  enabled: PropTypes.bool,
  visible: PropTypes.bool,
};

Tab.defaultProps = {
  ...universalDefaultProps,
  enabled: true,
  visible: true,
};

export default Tab;
