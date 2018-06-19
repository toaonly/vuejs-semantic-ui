import SemanticUiAccordion from './components/accordion.vue'
import SemanticUiCheckbox from './components/checkbox.vue'
import SemanticUiDimmer from './components/dimmer.vue'
import SemanticUiModal from './components/modal.vue'
import SemanticUiTab from './components/tab.vue'
import SemanticUiSidebar from './components/sidebar.vue'

import SemanticUiButton from './components/button.vue'
import SemanticUiButtonGroup from './components/button-group.vue'
import SemanticUiContainer from './components/container.vue'
import SemanticUiDivider from './components/divider.vue'
import SemanticUiHeader from './components/header.vue'
import SemanticUiFlag from './components/flag.vue'
import SemanticUiIcon from './components/icon.vue'
import SemanticUiIconGroup from './components/icon-group.vue'
import SemanticUiInput from './components/input.vue'
import SemanticUiLabel from './components/label.vue'
import SemanticUiLabelGroup from './components/label-group.vue'
import SemanticUiImage from './components/image.vue'
import SemanticUiImageGroup from './components/image-group.vue'
import SemanticUiSegment from './components/segment.vue'
import SemanticUiSegmentGroup from './components/segment-group.vue'
import SemanticUiList from './components/list.vue'
import SemanticUiItem from './components/item.vue'
import SemanticUiItemContent from './components/item-content.vue'
import SemanticUiItemHeader from './components/item-header.vue'
import SemanticUiItemDescription from './components/item-description.vue'
import SemanticUiLoader from './components/loader.vue'
import SemanticUiRail from './components/rail.vue'
import SemanticUiReveal from './components/reveal.vue'
import SemanticUiRevealVisibleContent from './components/reveal-visible-content.vue'
import SemanticUiRevealHiddenContent from './components/reveal-hidden-content.vue'
import SemanticUiBreadcrumb from './components/breadcrumb.vue'
import SemanticUiBreadcrumbSection from './components/breadcrumb-section.vue'
import SemanticUiBreadcrumbDivider from './components/breadcrumb-divider.vue'
import SemanticUiForm from './components/form.vue'
import SemanticUiField from './components/field.vue'
import SemanticUiFields from './components/fields.vue'
import SemanticUiGrid from './components/grid.vue'
import SemanticUiRow from './components/row.vue'
import SemanticUiColumn from './components/column.vue'
import SemanticUiMenu from './components/menu.vue'

import SemanticUiTitle from './components/title.vue'
import SemanticUiContent from './components/content.vue'


function installed(Vue)	{
  let jQuery = require('jquery'), semantic;

  window.jQuery = window.$ = jQuery;

  if (process.env.NODE_ENV == 'development')  {
    semantic = require('semantic-ui/dist/semantic.js');
  } else  {
    semantic = require('semantic-ui/dist/semantic.min.js');
  }

  require('semantic-ui/dist/semantic.min.css');

  Vue.component('SuButton', SemanticUiButton);
  Vue.component('SuButtonGroup', SemanticUiButtonGroup);

  Vue.component('SuContainer', SemanticUiContainer);

  Vue.component('SuDivider', SemanticUiDivider);

  Vue.component('SuFlag', SemanticUiFlag);

  Vue.component('SuHeader', SemanticUiHeader);

  Vue.component('SuIcon', SemanticUiIcon);
  Vue.component('SuIconGroup', SemanticUiIconGroup);

  Vue.component('SuInput', SemanticUiInput);

  Vue.component('SuLabel', SemanticUiLabel);
  Vue.component('SuLabelGroup', SemanticUiLabelGroup);

  Vue.component('SuImage', SemanticUiImage);
  Vue.component('SuImageGroup', SemanticUiImageGroup);

  Vue.component('SuSegment', SemanticUiSegment);
  Vue.component('SuSegmentGroup', SemanticUiSegmentGroup);

  Vue.component('SuList', SemanticUiList);
  Vue.component('SuItem', SemanticUiItem);
  Vue.component('SuItemContent', SemanticUiItemContent);
  Vue.component('SuItemHeader', SemanticUiItemHeader);
  Vue.component('SuItemDescription', SemanticUiItemDescription);

  Vue.component('SuLoader', SemanticUiLoader);

  Vue.component('SuRail', SemanticUiRail);

  Vue.component('SuReveal', SemanticUiReveal);
  Vue.component('SuRevealVisibleContent', SemanticUiRevealVisibleContent);
  Vue.component('SuRevealHiddenContent', SemanticUiRevealHiddenContent);

  Vue.component('SuBreadcrumb', SemanticUiBreadcrumb);
  Vue.component('SuBreadcrumbSection', SemanticUiBreadcrumbSection);
  Vue.component('SuBreadcrumbDivider', SemanticUiBreadcrumbDivider);

  Vue.component('SuForm', SemanticUiForm);
  Vue.component('SuField', SemanticUiField);
  Vue.component('SuFields', SemanticUiFields);

  Vue.component('SuGrid', SemanticUiGrid);
  Vue.component('SuRow', SemanticUiRow);
  Vue.component('SuColumn', SemanticUiColumn);

  Vue.component('SuMenu', SemanticUiMenu);


  Vue.component('SuTitle', SemanticUiTitle);
  Vue.component('SuContent', SemanticUiContent);

  // Vue.directive('ui-transition', require('./semantic-transition.directive').default);
  Vue.component('SuAccordion', SemanticUiAccordion);
  Vue.component('SuCheckbox', SemanticUiCheckbox);
  Vue.component('SuDimmer', SemanticUiDimmer);
  Vue.component('SuTab', SemanticUiTab);
  // Vue.directive('ui-dropdown', require('./semantic-dropdown.directive').default);
  Vue.component('SuModal', SemanticUiModal);
  Vue.component('SuSidebar', SemanticUiSidebar);
  // Vue.directive('ui-search', require('./semantic-search.directive').default);
  // Vue.directive('ui-sidebar', require('./semantic-sidebar.directive').default);
  // Vue.directive('ui-progress', require('./semantic-progress.directive').default);
};

export default installed;
