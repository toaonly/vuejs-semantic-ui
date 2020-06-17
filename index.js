import Vue from 'vue'

import SemanticUiAccordion from './components/accordion.vue'
import SemanticUiCheckbox from './components/checkbox.vue'
import SemanticUiDimmer from './components/dimmer.vue'
import SemanticUiDropdown from './components/dropdown.vue'
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
import SemanticUiItemContentHeader from './components/item-content-header.vue'
import SemanticUiItemContentDescription from './components/item-content-description.vue'
import SemanticUiItemContentExtra from './components/item-content-extra.vue'
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
import SemanticUiFieldLabel from './components/field-label.vue'
import SemanticUiGrid from './components/grid.vue'
import SemanticUiRow from './components/row.vue'
import SemanticUiColumn from './components/column.vue'
import SemanticUiMenu from './components/menu.vue'
import SemanticUiMessage from './components/message.vue'
import SemanticUiTable from './components/table.vue'
import SemanticUiTableRow from './components/table-row.vue'
import SemanticUiTableCell from './components/table-cell.vue'
import SemanticUiTableHeaderCell from './components/table-header-cell.vue'
import SemanticUiTableHead from './components/table-head.vue'
import SemanticUiTableBody from './components/table-body.vue'
import SemanticUiTableFoot from './components/table-foot.vue'
import SemanticUiCard from './components/card.vue'
import SemanticUiCards from './components/cards.vue'

import SemanticUiTitle from './components/title.vue'
import SemanticUiContent from './components/content.vue'
import SemanticUiDescription from './components/description.vue'
import SemanticUiExtraContent from './components/extra-content.vue'
import SemanticUiMeta from './components/meta.vue'
import SemanticUiFeed from './components/feed.vue'
import SemanticUiEvent from './components/event.vue'
import SemanticUiSummary from './components/summary.vue'

import modules from './modules'

/**
 * @param {Vue} Vue
 */
function install(Vue)	{
  if(!window.$) {
    const jQuery = require('jquery');

    Object.defineProperties(window, {
      $: { enumerable: false, configurable: false, get: () => jQuery },
      jQuery: { enumerable: false, configurable: false, get: () => jQuery }
    })
  }

  if (process.env.NODE_ENV == 'development')  {
    require('semantic-ui-css/semantic.js');
  } else  {
    require('semantic-ui-css/semantic.min.js');
  }

  const script = document.createElement('script');
  script.setAttribute('src', '//semantic-ui.com/javascript/library/tablesort.js');
  document.head.append(script);

  require('semantic-ui-css/semantic.min.css');

  modules(Vue);

  Vue.component('SuButton', SemanticUiButton);
  Vue.component('SuButtonGroup', SemanticUiButtonGroup);
  Vue.component('SuButtons', SemanticUiButtonGroup);

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
  Vue.component('SuImg', SemanticUiImage);
  Vue.component('SuImageGroup', SemanticUiImageGroup);
  Vue.component('SuImgGroup', SemanticUiImageGroup);

  Vue.component('SuSegment', SemanticUiSegment);
  Vue.component('SuSegmentGroup', SemanticUiSegmentGroup);

  Vue.component('SuList', SemanticUiList);
  Vue.component('SuItem', SemanticUiItem);
  Vue.component('SuContent', SemanticUiItemContent);
  Vue.component('SuContentHeader', SemanticUiItemContentHeader);
  Vue.component('SuContentDescription', SemanticUiItemContentDescription);
  Vue.component('SuContentExtra', SemanticUiItemContentExtra);
  Vue.component('SuExtra', SemanticUiItemContentExtra);

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
  Vue.component('SuFieldLabel', SemanticUiFieldLabel);

  Vue.component('SuGrid', SemanticUiGrid);
  Vue.component('SuRow', SemanticUiRow);
  Vue.component('SuColumn', SemanticUiColumn);

  Vue.component('SuMenu', SemanticUiMenu);

  Vue.component('SuMessage', SemanticUiMessage);

  Vue.component('SuTable', SemanticUiTable);
  Vue.component('SuTr', SemanticUiTableRow);
  Vue.component('SuTd', SemanticUiTableCell);
  Vue.component('SuTh', SemanticUiTableHeaderCell);
  Vue.component('SuThead', SemanticUiTableHead);
  Vue.component('SuTbody', SemanticUiTableBody);
  Vue.component('SuTfoot', SemanticUiTableFoot);

  Vue.component('SuCard', SemanticUiCard);
  Vue.component('SuCards', SemanticUiCards);

  Vue.component('SuTitle', SemanticUiTitle);
  Vue.component('SuContent', SemanticUiContent);
  Vue.component('SuDescription', SemanticUiDescription);
  Vue.component('SuExtraContent', SemanticUiExtraContent);
  Vue.component('SuMeta', SemanticUiMeta);
  Vue.component('SuFeed', SemanticUiFeed);
  Vue.component('SuEvent', SemanticUiEvent);
  Vue.component('SuSummary', SemanticUiSummary);

  Vue.component('SuAccordion', SemanticUiAccordion);
  Vue.component('SuCheckbox', SemanticUiCheckbox);
  Vue.component('SuDimmer', SemanticUiDimmer);
  Vue.component('SuDropdown', SemanticUiDropdown);
  Vue.component('SuTab', SemanticUiTab);
  Vue.component('SuModal', SemanticUiModal);
  Vue.component('SuSidebar', SemanticUiSidebar);
};

class SemanticUI {};

SemanticUI.install = install;

export default SemanticUI.install
