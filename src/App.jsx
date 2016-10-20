import React, { Component } from 'react';
import TopMenu from './components/TopMenu.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div className="page-wrapper">
          <div className="page-header navbar navbar-fixed-top">
            <div className="page-header-inner ">
              <div className="page-logo">
                <a href="index.html">
                  <img src="styles/layouts/layout/img/logo.png" alt="logo" className="logo-default" /> </a>
                <div className="menu-toggler sidebar-toggler">
                  <span />
                </div>
              </div>
              <a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
                <span />
              </a>
              <TopMenu />
            </div>
            {/* END HEADER INNER */}
          </div>
          {/* END HEADER */}
          {/* BEGIN HEADER & CONTENT DIVIDER */}
          <div className="clearfix"> </div>
          {/* END HEADER & CONTENT DIVIDER */}
          {/* BEGIN CONTAINER */}
          <div className="page-container">
            {/* BEGIN SIDEBAR */}
            <div className="page-sidebar-wrapper">
              {/* BEGIN SIDEBAR */}
              {/* DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing */}
              {/* DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed */}
              <div className="page-sidebar navbar-collapse collapse">
                {/* BEGIN SIDEBAR MENU */}
                {/* DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) */}
                {/* DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode */}
                {/* DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode */}
                {/* DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing */}
                {/* DOC: Set data-keep-expand="true" to keep the submenues expanded */}
                {/* DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed */}
                <ul className="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed={200} style={{paddingTop: 20}}>
                  {/* DOC: To remove the sidebar toggler from the sidebar you just need to completely remove the below "sidebar-toggler-wrapper" LI element */}
                  {/* BEGIN SIDEBAR TOGGLER BUTTON */}
                  <li className="sidebar-toggler-wrapper hide">
                    <div className="sidebar-toggler">
                      <span />
                    </div>
                  </li>
                  {/* END SIDEBAR TOGGLER BUTTON */}
                  {/* DOC: To remove the search box from the sidebar you just need to completely remove the below "sidebar-search-wrapper" LI element */}
                  <li className="sidebar-search-wrapper">
                    {/* BEGIN RESPONSIVE QUICK SEARCH FORM */}
                    {/* DOC: Apply "sidebar-search-bordered" class the below search form to have bordered search box */}
                    {/* DOC: Apply "sidebar-search-bordered sidebar-search-solid" class the below search form to have bordered & solid search box */}
                    <form className="sidebar-search  " action="page_general_search_3.html" method="POST">
                      <a href="javascript:;" className="remove">
                        <i className="icon-close" />
                      </a>
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search..." />
                        <span className="input-group-btn">
                          <a href="javascript:;" className="btn submit">
                            <i className="icon-magnifier" />
                          </a>
                        </span>
                      </div>
                    </form>
                    {/* END RESPONSIVE QUICK SEARCH FORM */}
                  </li>
                  <li className="nav-item start active open">
                    <a href="javascript:;" className="nav-link nav-toggle">
                      <i className="icon-home" />
                      <span className="title">Dashboard</span>
                      <span className="selected" />
                      <span className="arrow open" />
                    </a>
                    <ul className="sub-menu">
                      <li className="nav-item start active open">
                        <a href="index.html" className="nav-link ">
                          <i className="icon-bar-chart" />
                          <span className="title">Dashboard 1</span>
                          <span className="selected" />
                        </a>
                      </li>
                      <li className="nav-item start ">
                        <a href="dashboard_2.html" className="nav-link ">
                          <i className="icon-bulb" />
                          <span className="title">Dashboard 2</span>
                          <span className="badge badge-success">1</span>
                        </a>
                      </li>
                      <li className="nav-item start ">
                        <a href="dashboard_3.html" className="nav-link ">
                          <i className="icon-graph" />
                          <span className="title">Dashboard 3</span>
                          <span className="badge badge-danger">5</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="heading">
                    <h3 className="uppercase">Features</h3>
                  </li>
                  <li className="nav-item  ">
                    <a href="javascript:;" className="nav-link nav-toggle">
                      <i className="icon-diamond" />
                      <span className="title">UI Features</span>
                      <span className="arrow" />
                    </a>
                    <ul className="sub-menu">
                      <li className="nav-item  ">
                        <a href="ui_colors.html" className="nav-link ">
                          <span className="title">Color Library</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_metronic_grid.html" className="nav-link ">
                          <span className="title">Metronic Grid System</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_general.html" className="nav-link ">
                          <span className="title">General Components</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_buttons.html" className="nav-link ">
                          <span className="title">Buttons</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_buttons_spinner.html" className="nav-link ">
                          <span className="title">Spinner Buttons</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_confirmations.html" className="nav-link ">
                          <span className="title">Popover Confirmations</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_sweetalert.html" className="nav-link ">
                          <span className="title">Bootstrap Sweet Alerts</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_icons.html" className="nav-link ">
                          <span className="title">Font Icons</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_socicons.html" className="nav-link ">
                          <span className="title">Social Icons</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_typography.html" className="nav-link ">
                          <span className="title">Typography</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_tabs_accordions_navs.html" className="nav-link ">
                          <span className="title">Tabs, Accordions &amp; Navs</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_timeline.html" className="nav-link ">
                          <span className="title">Timeline 1</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_timeline_2.html" className="nav-link ">
                          <span className="title">Timeline 2</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_timeline_horizontal.html" className="nav-link ">
                          <span className="title">Horizontal Timeline</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_tree.html" className="nav-link ">
                          <span className="title">Tree View</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="javascript:;" className="nav-link nav-toggle">
                          <span className="title">Page Progress Bar</span>
                          <span className="arrow" />
                        </a>
                        <ul className="sub-menu">
                          <li className="nav-item ">
                            <a href="ui_page_progress_style_1.html" className="nav-link "> Flash </a>
                          </li>
                          <li className="nav-item ">
                            <a href="ui_page_progress_style_2.html" className="nav-link "> Big Counter </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_blockui.html" className="nav-link ">
                          <span className="title">Block UI</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_bootstrap_growl.html" className="nav-link ">
                          <span className="title">Bootstrap Growl Notifications</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_notific8.html" className="nav-link ">
                          <span className="title">Notific8 Notifications</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_toastr.html" className="nav-link ">
                          <span className="title">Toastr Notifications</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_bootbox.html" className="nav-link ">
                          <span className="title">Bootbox Dialogs</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_alerts_api.html" className="nav-link ">
                          <span className="title">Metronic Alerts API</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_session_timeout.html" className="nav-link ">
                          <span className="title">Session Timeout</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_idle_timeout.html" className="nav-link ">
                          <span className="title">User Idle Timeout</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_modals.html" className="nav-link ">
                          <span className="title">Modals</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_extended_modals.html" className="nav-link ">
                          <span className="title">Extended Modals</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_tiles.html" className="nav-link ">
                          <span className="title">Tiles</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_datepaginator.html" className="nav-link ">
                          <span className="title">Date Paginator</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ui_nestable.html" className="nav-link ">
                          <span className="title">Nestable List</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item  ">
                    <a href="javascript:;" className="nav-link nav-toggle">
                      <i className="icon-puzzle" />
                      <span className="title">Components</span>
                      <span className="arrow" />
                    </a>
                    <ul className="sub-menu">
                      <li className="nav-item  ">
                        <a href="components_date_time_pickers.html" className="nav-link ">
                          <span className="title">Date &amp; Time Pickers</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="components_color_pickers.html" className="nav-link ">
                          <span className="title">Color Pickers</span>
                          <span className="badge badge-danger">2</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="components_select2.html" className="nav-link ">
                          <span className="title">Select2 Dropdowns</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="components_bootstrap_multiselect_dropdown.html" className="nav-link ">
                          <span className="title">Bootstrap Multiselect Dropdowns</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="components_bootstrap_select.html" className="nav-link ">
                          <span className="title">Bootstrap Select</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="components_multi_select.html" className="nav-link ">
                          <span className="title">Bootstrap Multiple Select</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="components_bootstrap_select_splitter.html" className="nav-link ">
                          <span className="title">Select Splitter</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="components_clipboard.html" className="nav-link ">
                          <span className="title">Clipboard</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="components_typeahead.html" className="nav-link ">
                          <span className="title">Typeahead Autocomplete</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="components_bootstrap_tagsinput.html" className="nav-link ">
                          <span className="title">Bootstrap Tagsinput</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="components_bootstrap_switch.html" className="nav-link ">
                          <span className="title">Bootstrap Switch</span>
                          <span className="badge badge-success">6</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="components_bootstrap_maxlength.html" className="nav-link ">
                          <span className="title">Bootstrap Maxlength</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="components_bootstrap_fileinput.html" className="nav-link ">
                          <span className="title">Bootstrap File Input</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="components_bootstrap_touchspin.html" className="nav-link ">
                          <span className="title">Bootstrap Touchspin</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="components_form_tools.html" className="nav-link ">
                          <span className="title">Form Widgets &amp; Tools</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="components_context_menu.html" className="nav-link ">
                          <span className="title">Context Menu</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="components_editors.html" className="nav-link ">
                          <span className="title">Markdown &amp; WYSIWYG Editors</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="components_code_editors.html" className="nav-link ">
                          <span className="title">Code Editors</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="components_ion_sliders.html" className="nav-link ">
                          <span className="title">Ion Range Sliders</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="components_noui_sliders.html" className="nav-link ">
                          <span className="title">NoUI Range Sliders</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="components_knob_dials.html" className="nav-link ">
                          <span className="title">Knob Circle Dials</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item  ">
                    <a href="javascript:;" className="nav-link nav-toggle">
                      <i className="icon-settings" />
                      <span className="title">Form Stuff</span>
                      <span className="arrow" />
                    </a>
                    <ul className="sub-menu">
                      <li className="nav-item  ">
                        <a href="form_controls.html" className="nav-link ">
                          <span className="title">Bootstrap Form
                            <br />Controls</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="form_controls_md.html" className="nav-link ">
                          <span className="title">Material Design
                            <br />Form Controls</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="form_validation.html" className="nav-link ">
                          <span className="title">Form Validation</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="form_validation_states_md.html" className="nav-link ">
                          <span className="title">Material Design
                            <br />Form Validation States</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="form_validation_md.html" className="nav-link ">
                          <span className="title">Material Design
                            <br />Form Validation</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="form_layouts.html" className="nav-link ">
                          <span className="title">Form Layouts</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="form_repeater.html" className="nav-link ">
                          <span className="title">Form Repeater</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="form_input_mask.html" className="nav-link ">
                          <span className="title">Form Input Mask</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="form_editable.html" className="nav-link ">
                          <span className="title">Form X-editable</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="form_wizard.html" className="nav-link ">
                          <span className="title">Form Wizard</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="form_icheck.html" className="nav-link ">
                          <span className="title">iCheck Controls</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="form_image_crop.html" className="nav-link ">
                          <span className="title">Image Cropping</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="form_fileupload.html" className="nav-link ">
                          <span className="title">Multiple File Upload</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="form_dropzone.html" className="nav-link ">
                          <span className="title">Dropzone File Upload</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item  ">
                    <a href="javascript:;" className="nav-link nav-toggle">
                      <i className="icon-bulb" />
                      <span className="title">Elements</span>
                      <span className="arrow" />
                    </a>
                    <ul className="sub-menu">
                      <li className="nav-item  ">
                        <a href="elements_steps.html" className="nav-link ">
                          <span className="title">Steps</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="elements_lists.html" className="nav-link ">
                          <span className="title">Lists</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="elements_ribbons.html" className="nav-link ">
                          <span className="title">Ribbons</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="elements_overlay.html" className="nav-link ">
                          <span className="title">Overlays</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="elements_cards.html" className="nav-link ">
                          <span className="title">User Cards</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item  ">
                    <a href="javascript:;" className="nav-link nav-toggle">
                      <i className="icon-briefcase" />
                      <span className="title">Tables</span>
                      <span className="arrow" />
                    </a>
                    <ul className="sub-menu">
                      <li className="nav-item  ">
                        <a href="table_static_basic.html" className="nav-link ">
                          <span className="title">Basic Tables</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="table_static_responsive.html" className="nav-link ">
                          <span className="title">Responsive Tables</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="table_bootstrap.html" className="nav-link ">
                          <span className="title">Bootstrap Tables</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="javascript:;" className="nav-link nav-toggle">
                          <span className="title">Datatables</span>
                          <span className="arrow" />
                        </a>
                        <ul className="sub-menu">
                          <li className="nav-item ">
                            <a href="table_datatables_managed.html" className="nav-link "> Managed Datatables </a>
                          </li>
                          <li className="nav-item ">
                            <a href="table_datatables_buttons.html" className="nav-link "> Buttons Extension </a>
                          </li>
                          <li className="nav-item ">
                            <a href="table_datatables_colreorder.html" className="nav-link "> Colreorder Extension </a>
                          </li>
                          <li className="nav-item ">
                            <a href="table_datatables_rowreorder.html" className="nav-link "> Rowreorder Extension </a>
                          </li>
                          <li className="nav-item ">
                            <a href="table_datatables_scroller.html" className="nav-link "> Scroller Extension </a>
                          </li>
                          <li className="nav-item ">
                            <a href="table_datatables_fixedheader.html" className="nav-link "> FixedHeader Extension </a>
                          </li>
                          <li className="nav-item ">
                            <a href="table_datatables_responsive.html" className="nav-link "> Responsive Extension </a>
                          </li>
                          <li className="nav-item ">
                            <a href="table_datatables_editable.html" className="nav-link "> Editable Datatables </a>
                          </li>
                          <li className="nav-item ">
                            <a href="table_datatables_ajax.html" className="nav-link "> Ajax Datatables </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item  ">
                    <a href="?p=" className="nav-link nav-toggle">
                      <i className="icon-wallet" />
                      <span className="title">Portlets</span>
                      <span className="arrow" />
                    </a>
                    <ul className="sub-menu">
                      <li className="nav-item  ">
                        <a href="portlet_boxed.html" className="nav-link ">
                          <span className="title">Boxed Portlets</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="portlet_light.html" className="nav-link ">
                          <span className="title">Light Portlets</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="portlet_solid.html" className="nav-link ">
                          <span className="title">Solid Portlets</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="portlet_ajax.html" className="nav-link ">
                          <span className="title">Ajax Portlets</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="portlet_draggable.html" className="nav-link ">
                          <span className="title">Draggable Portlets</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item  ">
                    <a href="javascript:;" className="nav-link nav-toggle">
                      <i className="icon-bar-chart" />
                      <span className="title">Charts</span>
                      <span className="arrow" />
                    </a>
                    <ul className="sub-menu">
                      <li className="nav-item  ">
                        <a href="charts_amcharts.html" className="nav-link ">
                          <span className="title">amChart</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="charts_flotcharts.html" className="nav-link ">
                          <span className="title">Flot Charts</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="charts_flowchart.html" className="nav-link ">
                          <span className="title">Flow Charts</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="charts_google.html" className="nav-link ">
                          <span className="title">Google Charts</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="charts_echarts.html" className="nav-link ">
                          <span className="title">eCharts</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="charts_morris.html" className="nav-link ">
                          <span className="title">Morris Charts</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="javascript:;" className="nav-link nav-toggle">
                          <span className="title">HighCharts</span>
                          <span className="arrow" />
                        </a>
                        <ul className="sub-menu">
                          <li className="nav-item ">
                            <a href="charts_highcharts.html" className="nav-link "> HighCharts </a>
                          </li>
                          <li className="nav-item ">
                            <a href="charts_highstock.html" className="nav-link "> HighStock </a>
                          </li>
                          <li className="nav-item ">
                            <a href="charts_highmaps.html" className="nav-link "> HighMaps </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item  ">
                    <a href="javascript:;" className="nav-link nav-toggle">
                      <i className="icon-pointer" />
                      <span className="title">Maps</span>
                      <span className="arrow" />
                    </a>
                    <ul className="sub-menu">
                      <li className="nav-item  ">
                        <a href="maps_google.html" className="nav-link ">
                          <span className="title">Google Maps</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="maps_vector.html" className="nav-link ">
                          <span className="title">Vector Maps</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="heading">
                    <h3 className="uppercase">Layouts</h3>
                  </li>
                  <li className="nav-item  ">
                    <a href="javascript:;" className="nav-link nav-toggle">
                      <i className="icon-layers" />
                      <span className="title">Page Layouts</span>
                      <span className="arrow" />
                    </a>
                    <ul className="sub-menu">
                      <li className="nav-item  ">
                        <a href="layout_blank_page.html" className="nav-link ">
                          <span className="title">Blank Page</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="layout_ajax_page.html" className="nav-link ">
                          <span className="title">Ajax Content Layout</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="layout_offcanvas_mobile_menu.html" className="nav-link ">
                          <span className="title">Off-canvas Mobile Menu</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="layout_classic_page_head.html" className="nav-link ">
                          <span className="title">Classic Page Head</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="layout_light_page_head.html" className="nav-link ">
                          <span className="title">Light Page Head</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="layout_content_grey.html" className="nav-link ">
                          <span className="title">Grey Bg Content</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="layout_search_on_header_1.html" className="nav-link ">
                          <span className="title">Search Box On Header 1</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="layout_search_on_header_2.html" className="nav-link ">
                          <span className="title">Search Box On Header 2</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="layout_language_bar.html" className="nav-link ">
                          <span className="title">Header Language Bar</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="layout_footer_fixed.html" className="nav-link ">
                          <span className="title">Fixed Footer</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="layout_boxed_page.html" className="nav-link ">
                          <span className="title">Boxed Page</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item  ">
                    <a href="javascript:;" className="nav-link nav-toggle">
                      <i className="icon-feed" />
                      <span className="title">Sidebar Layouts</span>
                      <span className="arrow" />
                    </a>
                    <ul className="sub-menu">
                      <li className="nav-item  ">
                        <a href="layout_sidebar_menu_light.html" className="nav-link ">
                          <span className="title">Light Sidebar Menu</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="layout_sidebar_menu_hover.html" className="nav-link ">
                          <span className="title">Hover Sidebar Menu</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="layout_sidebar_search_1.html" className="nav-link ">
                          <span className="title">Sidebar Search Option 1</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="layout_sidebar_search_2.html" className="nav-link ">
                          <span className="title">Sidebar Search Option 2</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="layout_toggler_on_sidebar.html" className="nav-link ">
                          <span className="title">Sidebar Toggler On Sidebar</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="layout_sidebar_reversed.html" className="nav-link ">
                          <span className="title">Reversed Sidebar Page</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="layout_sidebar_fixed.html" className="nav-link ">
                          <span className="title">Fixed Sidebar Layout</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="layout_sidebar_closed.html" className="nav-link ">
                          <span className="title">Closed Sidebar Layout</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item  ">
                    <a href="javascript:;" className="nav-link nav-toggle">
                      <i className="icon-paper-plane" />
                      <span className="title">Horizontal Menu</span>
                      <span className="arrow" />
                    </a>
                    <ul className="sub-menu">
                      <li className="nav-item  ">
                        <a href="layout_mega_menu_light.html" className="nav-link ">
                          <span className="title">Light Mega Menu</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="layout_mega_menu_dark.html" className="nav-link ">
                          <span className="title">Dark Mega Menu</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="layout_full_width.html" className="nav-link ">
                          <span className="title">Full Width Layout</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item  ">
                    <a href="javascript:;" className="nav-link nav-toggle">
                      <i className=" icon-wrench" />
                      <span className="title">Custom Layouts</span>
                      <span className="arrow" />
                    </a>
                    <ul className="sub-menu">
                      <li className="nav-item  ">
                        <a href="layout_disabled_menu.html" className="nav-link ">
                          <span className="title">Disabled Menu Links</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="layout_full_height_portlet.html" className="nav-link ">
                          <span className="title">Full Height Portlet</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="layout_full_height_content.html" className="nav-link ">
                          <span className="title">Full Height Content</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="heading">
                    <h3 className="uppercase">Pages</h3>
                  </li>
                  <li className="nav-item  ">
                    <a href="javascript:;" className="nav-link nav-toggle">
                      <i className="icon-basket" />
                      <span className="title">eCommerce</span>
                      <span className="arrow" />
                    </a>
                    <ul className="sub-menu">
                      <li className="nav-item  ">
                        <a href="ecommerce_index.html" className="nav-link ">
                          <i className="icon-home" />
                          <span className="title">Dashboard</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ecommerce_orders.html" className="nav-link ">
                          <i className="icon-basket" />
                          <span className="title">Orders</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ecommerce_orders_view.html" className="nav-link ">
                          <i className="icon-tag" />
                          <span className="title">Order View</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ecommerce_products.html" className="nav-link ">
                          <i className="icon-graph" />
                          <span className="title">Products</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="ecommerce_products_edit.html" className="nav-link ">
                          <i className="icon-graph" />
                          <span className="title">Product Edit</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item  ">
                    <a href="javascript:;" className="nav-link nav-toggle">
                      <i className="icon-docs" />
                      <span className="title">Apps</span>
                      <span className="arrow" />
                    </a>
                    <ul className="sub-menu">
                      <li className="nav-item  ">
                        <a href="app_todo.html" className="nav-link ">
                          <i className="icon-clock" />
                          <span className="title">Todo 1</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="app_todo_2.html" className="nav-link ">
                          <i className="icon-check" />
                          <span className="title">Todo 2</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="app_inbox.html" className="nav-link ">
                          <i className="icon-envelope" />
                          <span className="title">Inbox</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="app_calendar.html" className="nav-link ">
                          <i className="icon-calendar" />
                          <span className="title">Calendar</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="app_ticket.html" className="nav-link ">
                          <i className="icon-notebook" />
                          <span className="title">Support</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item  ">
                    <a href="javascript:;" className="nav-link nav-toggle">
                      <i className="icon-user" />
                      <span className="title">User</span>
                      <span className="arrow" />
                    </a>
                    <ul className="sub-menu">
                      <li className="nav-item  ">
                        <a href="page_user_profile_1.html" className="nav-link ">
                          <i className="icon-user" />
                          <span className="title">Profile 1</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="page_user_profile_1_account.html" className="nav-link ">
                          <i className="icon-user-female" />
                          <span className="title">Profile 1 Account</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="page_user_profile_1_help.html" className="nav-link ">
                          <i className="icon-user-following" />
                          <span className="title">Profile 1 Help</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="page_user_profile_2.html" className="nav-link ">
                          <i className="icon-users" />
                          <span className="title">Profile 2</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="javascript:;" className="nav-link nav-toggle">
                          <i className="icon-notebook" />
                          <span className="title">Login</span>
                          <span className="arrow" />
                        </a>
                        <ul className="sub-menu">
                          <li className="nav-item ">
                            <a href="page_user_login_1.html" className="nav-link " target="_blank"> Login Page 1 </a>
                          </li>
                          <li className="nav-item ">
                            <a href="page_user_login_2.html" className="nav-link " target="_blank"> Login Page 2 </a>
                          </li>
                          <li className="nav-item ">
                            <a href="page_user_login_3.html" className="nav-link " target="_blank"> Login Page 3 </a>
                          </li>
                          <li className="nav-item ">
                            <a href="page_user_login_4.html" className="nav-link " target="_blank"> Login Page 4 </a>
                          </li>
                          <li className="nav-item ">
                            <a href="page_user_login_5.html" className="nav-link " target="_blank"> Login Page 5 </a>
                          </li>
                          <li className="nav-item ">
                            <a href="page_user_login_6.html" className="nav-link " target="_blank"> Login Page 6 </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item  ">
                        <a href="page_user_lock_1.html" className="nav-link " target="_blank">
                          <i className="icon-lock" />
                          <span className="title">Lock Screen 1</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="page_user_lock_2.html" className="nav-link " target="_blank">
                          <i className="icon-lock-open" />
                          <span className="title">Lock Screen 2</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item  ">
                    <a href="javascript:;" className="nav-link nav-toggle">
                      <i className="icon-social-dribbble" />
                      <span className="title">General</span>
                      <span className="arrow" />
                    </a>
                    <ul className="sub-menu">
                      <li className="nav-item  ">
                        <a href="page_general_about.html" className="nav-link ">
                          <i className="icon-info" />
                          <span className="title">About</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="page_general_contact.html" className="nav-link ">
                          <i className="icon-call-end" />
                          <span className="title">Contact</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="javascript:;" className="nav-link nav-toggle">
                          <i className="icon-notebook" />
                          <span className="title">Portfolio</span>
                          <span className="arrow" />
                        </a>
                        <ul className="sub-menu">
                          <li className="nav-item ">
                            <a href="page_general_portfolio_1.html" className="nav-link "> Portfolio 1 </a>
                          </li>
                          <li className="nav-item ">
                            <a href="page_general_portfolio_2.html" className="nav-link "> Portfolio 2 </a>
                          </li>
                          <li className="nav-item ">
                            <a href="page_general_portfolio_3.html" className="nav-link "> Portfolio 3 </a>
                          </li>
                          <li className="nav-item ">
                            <a href="page_general_portfolio_4.html" className="nav-link "> Portfolio 4 </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item  ">
                        <a href="javascript:;" className="nav-link nav-toggle">
                          <i className="icon-magnifier" />
                          <span className="title">Search</span>
                          <span className="arrow" />
                        </a>
                        <ul className="sub-menu">
                          <li className="nav-item ">
                            <a href="page_general_search.html" className="nav-link "> Search 1 </a>
                          </li>
                          <li className="nav-item ">
                            <a href="page_general_search_2.html" className="nav-link "> Search 2 </a>
                          </li>
                          <li className="nav-item ">
                            <a href="page_general_search_3.html" className="nav-link "> Search 3 </a>
                          </li>
                          <li className="nav-item ">
                            <a href="page_general_search_4.html" className="nav-link "> Search 4 </a>
                          </li>
                          <li className="nav-item ">
                            <a href="page_general_search_5.html" className="nav-link "> Search 5 </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item  ">
                        <a href="page_general_pricing.html" className="nav-link ">
                          <i className="icon-tag" />
                          <span className="title">Pricing</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="page_general_faq.html" className="nav-link ">
                          <i className="icon-wrench" />
                          <span className="title">FAQ</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="page_general_blog.html" className="nav-link ">
                          <i className="icon-pencil" />
                          <span className="title">Blog</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="page_general_blog_post.html" className="nav-link ">
                          <i className="icon-note" />
                          <span className="title">Blog Post</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="page_general_invoice.html" className="nav-link ">
                          <i className="icon-envelope" />
                          <span className="title">Invoice</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="page_general_invoice_2.html" className="nav-link ">
                          <i className="icon-envelope" />
                          <span className="title">Invoice 2</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item  ">
                    <a href="javascript:;" className="nav-link nav-toggle">
                      <i className="icon-settings" />
                      <span className="title">System</span>
                      <span className="arrow" />
                    </a>
                    <ul className="sub-menu">
                      <li className="nav-item  ">
                        <a href="page_cookie_consent_1.html" className="nav-link ">
                          <span className="title">Cookie Consent 1</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="page_cookie_consent_2.html" className="nav-link ">
                          <span className="title">Cookie Consent 2</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="page_system_coming_soon.html" className="nav-link " target="_blank">
                          <span className="title">Coming Soon</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="page_system_404_1.html" className="nav-link ">
                          <span className="title">404 Page 1</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="page_system_404_2.html" className="nav-link " target="_blank">
                          <span className="title">404 Page 2</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="page_system_404_3.html" className="nav-link " target="_blank">
                          <span className="title">404 Page 3</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="page_system_500_1.html" className="nav-link ">
                          <span className="title">500 Page 1</span>
                        </a>
                      </li>
                      <li className="nav-item  ">
                        <a href="page_system_500_2.html" className="nav-link " target="_blank">
                          <span className="title">500 Page 2</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="javascript:;" className="nav-link nav-toggle">
                      <i className="icon-folder" />
                      <span className="title">Multi Level Menu</span>
                      <span className="arrow " />
                    </a>
                    <ul className="sub-menu">
                      <li className="nav-item">
                        <a href="javascript:;" className="nav-link nav-toggle">
                          <i className="icon-settings" /> Item 1
                          <span className="arrow" />
                        </a>
                        <ul className="sub-menu">
                          <li className="nav-item">
                            <a href="javascript:;" target="_blank" className="nav-link">
                              <i className="icon-user" /> Arrow Toggle
                              <span className="arrow nav-toggle" />
                            </a>
                            <ul className="sub-menu">
                              <li className="nav-item">
                                <a href="#" className="nav-link">
                                  <i className="icon-power" /> Sample Link 1</a>
                              </li>
                              <li className="nav-item">
                                <a href="#" className="nav-link">
                                  <i className="icon-paper-plane" /> Sample Link 1</a>
                              </li>
                              <li className="nav-item">
                                <a href="#" className="nav-link">
                                  <i className="icon-star" /> Sample Link 1</a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              <i className="icon-camera" /> Sample Link 1</a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              <i className="icon-link" /> Sample Link 2</a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              <i className="icon-pointer" /> Sample Link 3</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="javascript:;" target="_blank" className="nav-link">
                          <i className="icon-globe" /> Arrow Toggle
                          <span className="arrow nav-toggle" />
                        </a>
                        <ul className="sub-menu">
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              <i className="icon-tag" /> Sample Link 1</a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              <i className="icon-pencil" /> Sample Link 1</a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              <i className="icon-graph" /> Sample Link 1</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="icon-bar-chart" /> Item 3 </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* END SIDEBAR MENU */}
                {/* END SIDEBAR MENU */}
              </div>
              {/* END SIDEBAR */}
            </div>
            {/* END SIDEBAR */}
            {/* BEGIN CONTENT */}
            <div className="page-content-wrapper">
              {/* BEGIN CONTENT BODY */}
              <div className="page-content">
                {/* BEGIN PAGE HEADER*/}
                {/* BEGIN THEME PANEL */}
                <div className="theme-panel hidden-xs hidden-sm">
                  <div className="toggler"> </div>
                  <div className="toggler-close"> </div>
                  <div className="theme-options">
                    <div className="theme-option theme-colors clearfix">
                      <span> THEME COLOR </span>
                      <ul>
                        <li className="color-default current tooltips" data-style="default" data-container="body" data-original-title="Default"> </li>
                        <li className="color-darkblue tooltips" data-style="darkblue" data-container="body" data-original-title="Dark Blue"> </li>
                        <li className="color-blue tooltips" data-style="blue" data-container="body" data-original-title="Blue"> </li>
                        <li className="color-grey tooltips" data-style="grey" data-container="body" data-original-title="Grey"> </li>
                        <li className="color-light tooltips" data-style="light" data-container="body" data-original-title="Light"> </li>
                        <li className="color-light2 tooltips" data-style="light2" data-container="body" data-html="true" data-original-title="Light 2"> </li>
                      </ul>
                    </div>
                    <div className="theme-option">
                      <span> Theme Style </span>
                      <select className="layout-style-option form-control input-sm">
                        <option value="square" selected="selected">Square corners</option>
                        <option value="rounded">Rounded corners</option>
                      </select>
                    </div>
                    <div className="theme-option">
                      <span> Layout </span>
                      <select className="layout-option form-control input-sm">
                        <option value="fluid" selected="selected">Fluid</option>
                        <option value="boxed">Boxed</option>
                      </select>
                    </div>
                    <div className="theme-option">
                      <span> Header </span>
                      <select className="page-header-option form-control input-sm">
                        <option value="fixed" selected="selected">Fixed</option>
                        <option value="default">Default</option>
                      </select>
                    </div>
                    <div className="theme-option">
                      <span> Top Menu Dropdown</span>
                      <select className="page-header-top-dropdown-style-option form-control input-sm">
                        <option value="light" selected="selected">Light</option>
                        <option value="dark">Dark</option>
                      </select>
                    </div>
                    <div className="theme-option">
                      <span> Sidebar Mode</span>
                      <select className="sidebar-option form-control input-sm">
                        <option value="fixed">Fixed</option>
                        <option value="default" selected="selected">Default</option>
                      </select>
                    </div>
                    <div className="theme-option">
                      <span> Sidebar Menu </span>
                      <select className="sidebar-menu-option form-control input-sm">
                        <option value="accordion" selected="selected">Accordion</option>
                        <option value="hover">Hover</option>
                      </select>
                    </div>
                    <div className="theme-option">
                      <span> Sidebar Style </span>
                      <select className="sidebar-style-option form-control input-sm">
                        <option value="default" selected="selected">Default</option>
                        <option value="light">Light</option>
                      </select>
                    </div>
                    <div className="theme-option">
                      <span> Sidebar Position </span>
                      <select className="sidebar-pos-option form-control input-sm">
                        <option value="left" selected="selected">Left</option>
                        <option value="right">Right</option>
                      </select>
                    </div>
                    <div className="theme-option">
                      <span> Footer </span>
                      <select className="page-footer-option form-control input-sm">
                        <option value="fixed">Fixed</option>
                        <option value="default" selected="selected">Default</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* END THEME PANEL */}
                {/* BEGIN PAGE BAR */}
                <div className="page-bar">
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="index.html">Home</a>
                      <i className="fa fa-circle" />
                    </li>
                    <li>
                      <span>Dashboard</span>
                    </li>
                  </ul>
                  <div className="page-toolbar">
                    <div id="dashboard-report-range" className="pull-right tooltips btn btn-sm" data-container="body" data-placement="bottom" data-original-title="Change dashboard date range">
                      <i className="icon-calendar" />&nbsp;
                      <span className="thin uppercase hidden-xs" />&nbsp;
                      <i className="fa fa-angle-down" />
                    </div>
                  </div>
                </div>
                {/* END PAGE BAR */}
                {/* BEGIN PAGE TITLE*/}
                <h1 className="page-title"> Admin Dashboard
                  <small>statistics, charts, recent events and reports</small>
                </h1>
                {/* END PAGE TITLE*/}
                {/* END PAGE HEADER*/}
                {/* BEGIN DASHBOARD STATS 1*/}
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <a className="dashboard-stat dashboard-stat-v2 blue" href="#">
                      <div className="visual">
                        <i className="fa fa-comments" />
                      </div>
                      <div className="details">
                        <div className="number">
                          <span data-counter="counterup" data-value={1349}>0</span>
                        </div>
                        <div className="desc"> New Feedbacks </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <a className="dashboard-stat dashboard-stat-v2 red" href="#">
                      <div className="visual">
                        <i className="fa fa-bar-chart-o" />
                      </div>
                      <div className="details">
                        <div className="number">
                          <span data-counter="counterup" data-value="12,5">0</span>M$ </div>
                        <div className="desc"> Total Profit </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <a className="dashboard-stat dashboard-stat-v2 green" href="#">
                      <div className="visual">
                        <i className="fa fa-shopping-cart" />
                      </div>
                      <div className="details">
                        <div className="number">
                          <span data-counter="counterup" data-value={549}>0</span>
                        </div>
                        <div className="desc"> New Orders </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <a className="dashboard-stat dashboard-stat-v2 purple" href="#">
                      <div className="visual">
                        <i className="fa fa-globe" />
                      </div>
                      <div className="details">
                        <div className="number"> +
                          <span data-counter="counterup" data-value={89} />% </div>
                        <div className="desc"> Brand Popularity </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="clearfix" />
                {/* END DASHBOARD STATS 1*/}
                <div className="row">
                  <div className="col-lg-6 col-xs-12 col-sm-12">
                    {/* BEGIN PORTLET*/}
                    <div className="portlet light bordered">
                      <div className="portlet-title">
                        <div className="caption">
                          <i className="icon-bar-chart font-dark hide" />
                          <span className="caption-subject font-dark bold uppercase">Site Visits</span>
                          <span className="caption-helper">weekly stats...</span>
                        </div>
                        <div className="actions">
                          <div className="btn-group btn-group-devided" data-toggle="buttons">
                            <label className="btn red btn-outline btn-circle btn-sm active">
                              <input type="radio" name="options" className="toggle" id="option1" />New</label>
                            <label className="btn red btn-outline btn-circle btn-sm">
                              <input type="radio" name="options" className="toggle" id="option2" />Returning</label>
                          </div>
                        </div>
                      </div>
                      <div className="portlet-body">
                        <div id="site_statistics_loading">
                          <img src="styles/global/img/loading.gif" alt="loading" /> </div>
                        <div id="site_statistics_content" className="display-none">
                          <div id="site_statistics" className="chart"> </div>
                        </div>
                      </div>
                    </div>
                    {/* END PORTLET*/}
                  </div>
                  <div className="col-lg-6 col-xs-12 col-sm-12">
                    {/* BEGIN PORTLET*/}
                    <div className="portlet light bordered">
                      <div className="portlet-title">
                        <div className="caption">
                          <i className="icon-share font-red-sunglo hide" />
                          <span className="caption-subject font-dark bold uppercase">Revenue</span>
                          <span className="caption-helper">monthly stats...</span>
                        </div>
                        <div className="actions">
                          <div className="btn-group">
                            <a href className="btn dark btn-outline btn-circle btn-sm dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> Filter Range
                              <span className="fa fa-angle-down"> </span>
                            </a>
                            <ul className="dropdown-menu pull-right">
                              <li>
                                <a href="javascript:;"> Q1 2014
                                  <span className="label label-sm label-default"> past </span>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:;"> Q2 2014
                                  <span className="label label-sm label-default"> past </span>
                                </a>
                              </li>
                              <li className="active">
                                <a href="javascript:;"> Q3 2014
                                  <span className="label label-sm label-success"> current </span>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:;"> Q4 2014
                                  <span className="label label-sm label-warning"> upcoming </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="portlet-body">
                        <div id="site_activities_loading">
                          <img src="styles/global/img/loading.gif" alt="loading" /> </div>
                        <div id="site_activities_content" className="display-none">
                          <div id="site_activities" style={{height: 228}}> </div>
                        </div>
                        <div style={{margin: '20px 0 10px 30px'}}>
                          <div className="row">
                            <div className="col-md-3 col-sm-3 col-xs-6 text-stat">
                              <span className="label label-sm label-success"> Revenue: </span>
                              <h3>$13,234</h3>
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-6 text-stat">
                              <span className="label label-sm label-info"> Tax: </span>
                              <h3>$134,900</h3>
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-6 text-stat">
                              <span className="label label-sm label-danger"> Shipment: </span>
                              <h3>$1,134</h3>
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-6 text-stat">
                              <span className="label label-sm label-warning"> Orders: </span>
                              <h3>235090</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* END PORTLET*/}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-xs-12 col-sm-12">
                    <div className="portlet light bordered">
                      <div className="portlet-title tabbable-line">
                        <div className="caption">
                          <i className="icon-bubbles font-dark hide" />
                          <span className="caption-subject font-dark bold uppercase">Comments</span>
                        </div>
                        <ul className="nav nav-tabs">
                          <li className="active">
                            <a href="#portlet_comments_1" data-toggle="tab"> Pending </a>
                          </li>
                          <li>
                            <a href="#portlet_comments_2" data-toggle="tab"> Approved </a>
                          </li>
                        </ul>
                      </div>
                      <div className="portlet-body">
                        <div className="tab-content">
                          <div className="tab-pane active" id="portlet_comments_1">
                            {/* BEGIN: Comments */}
                            <div className="mt-comments">
                              <div className="mt-comment">
                                <div className="mt-comment-img">
                                  <img src="styles/pages/media/users/avatar1.jpg" /> </div>
                                <div className="mt-comment-body">
                                  <div className="mt-comment-info">
                                    <span className="mt-comment-author">Michael Baker</span>
                                    <span className="mt-comment-date">26 Feb, 10:30AM</span>
                                  </div>
                                  <div className="mt-comment-text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                                  <div className="mt-comment-details">
                                    <span className="mt-comment-status mt-comment-status-pending">Pending</span>
                                    <ul className="mt-comment-actions">
                                      <li>
                                        <a href="#">Quick Edit</a>
                                      </li>
                                      <li>
                                        <a href="#">View</a>
                                      </li>
                                      <li>
                                        <a href="#">Delete</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-comment">
                                <div className="mt-comment-img">
                                  <img src="styles/pages/media/users/avatar6.jpg" /> </div>
                                <div className="mt-comment-body">
                                  <div className="mt-comment-info">
                                    <span className="mt-comment-author">Larisa Maskalyova</span>
                                    <span className="mt-comment-date">12 Feb, 08:30AM</span>
                                  </div>
                                  <div className="mt-comment-text"> It is a long established fact that a reader will be distracted. </div>
                                  <div className="mt-comment-details">
                                    <span className="mt-comment-status mt-comment-status-rejected">Rejected</span>
                                    <ul className="mt-comment-actions">
                                      <li>
                                        <a href="#">Quick Edit</a>
                                      </li>
                                      <li>
                                        <a href="#">View</a>
                                      </li>
                                      <li>
                                        <a href="#">Delete</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-comment">
                                <div className="mt-comment-img">
                                  <img src="styles/pages/media/users/avatar8.jpg" /> </div>
                                <div className="mt-comment-body">
                                  <div className="mt-comment-info">
                                    <span className="mt-comment-author">Natasha Kim</span>
                                    <span className="mt-comment-date">19 Dec,09:50 AM</span>
                                  </div>
                                  <div className="mt-comment-text"> The generated Lorem or non-characteristic Ipsum is therefore or non-characteristic. </div>
                                  <div className="mt-comment-details">
                                    <span className="mt-comment-status mt-comment-status-pending">Pending</span>
                                    <ul className="mt-comment-actions">
                                      <li>
                                        <a href="#">Quick Edit</a>
                                      </li>
                                      <li>
                                        <a href="#">View</a>
                                      </li>
                                      <li>
                                        <a href="#">Delete</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-comment">
                                <div className="mt-comment-img">
                                  <img src="styles/pages/media/users/avatar4.jpg" /> </div>
                                <div className="mt-comment-body">
                                  <div className="mt-comment-info">
                                    <span className="mt-comment-author">Sebastian Davidson</span>
                                    <span className="mt-comment-date">10 Dec, 09:20 AM</span>
                                  </div>
                                  <div className="mt-comment-text"> The standard chunk of Lorem or non-characteristic Ipsum used since the 1500s or non-characteristic. </div>
                                  <div className="mt-comment-details">
                                    <span className="mt-comment-status mt-comment-status-rejected">Rejected</span>
                                    <ul className="mt-comment-actions">
                                      <li>
                                        <a href="#">Quick Edit</a>
                                      </li>
                                      <li>
                                        <a href="#">View</a>
                                      </li>
                                      <li>
                                        <a href="#">Delete</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* END: Comments */}
                          </div>
                          <div className="tab-pane" id="portlet_comments_2">
                            {/* BEGIN: Comments */}
                            <div className="mt-comments">
                              <div className="mt-comment">
                                <div className="mt-comment-img">
                                  <img src="styles/pages/media/users/avatar4.jpg" /> </div>
                                <div className="mt-comment-body">
                                  <div className="mt-comment-info">
                                    <span className="mt-comment-author">Michael Baker</span>
                                    <span className="mt-comment-date">26 Feb, 10:30AM</span>
                                  </div>
                                  <div className="mt-comment-text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. </div>
                                  <div className="mt-comment-details">
                                    <span className="mt-comment-status mt-comment-status-approved">Approved</span>
                                    <ul className="mt-comment-actions">
                                      <li>
                                        <a href="#">Quick Edit</a>
                                      </li>
                                      <li>
                                        <a href="#">View</a>
                                      </li>
                                      <li>
                                        <a href="#">Delete</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-comment">
                                <div className="mt-comment-img">
                                  <img src="styles/pages/media/users/avatar8.jpg" /> </div>
                                <div className="mt-comment-body">
                                  <div className="mt-comment-info">
                                    <span className="mt-comment-author">Larisa Maskalyova</span>
                                    <span className="mt-comment-date">12 Feb, 08:30AM</span>
                                  </div>
                                  <div className="mt-comment-text"> It is a long established fact that a reader will be distracted by. </div>
                                  <div className="mt-comment-details">
                                    <span className="mt-comment-status mt-comment-status-approved">Approved</span>
                                    <ul className="mt-comment-actions">
                                      <li>
                                        <a href="#">Quick Edit</a>
                                      </li>
                                      <li>
                                        <a href="#">View</a>
                                      </li>
                                      <li>
                                        <a href="#">Delete</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-comment">
                                <div className="mt-comment-img">
                                  <img src="styles/pages/media/users/avatar6.jpg" /> </div>
                                <div className="mt-comment-body">
                                  <div className="mt-comment-info">
                                    <span className="mt-comment-author">Natasha Kim</span>
                                    <span className="mt-comment-date">19 Dec,09:50 AM</span>
                                  </div>
                                  <div className="mt-comment-text"> The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. </div>
                                  <div className="mt-comment-details">
                                    <span className="mt-comment-status mt-comment-status-approved">Approved</span>
                                    <ul className="mt-comment-actions">
                                      <li>
                                        <a href="#">Quick Edit</a>
                                      </li>
                                      <li>
                                        <a href="#">View</a>
                                      </li>
                                      <li>
                                        <a href="#">Delete</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-comment">
                                <div className="mt-comment-img">
                                  <img src="styles/pages/media/users/avatar1.jpg" /> </div>
                                <div className="mt-comment-body">
                                  <div className="mt-comment-info">
                                    <span className="mt-comment-author">Sebastian Davidson</span>
                                    <span className="mt-comment-date">10 Dec, 09:20 AM</span>
                                  </div>
                                  <div className="mt-comment-text"> The standard chunk of Lorem Ipsum used since the 1500s </div>
                                  <div className="mt-comment-details">
                                    <span className="mt-comment-status mt-comment-status-approved">Approved</span>
                                    <ul className="mt-comment-actions">
                                      <li>
                                        <a href="#">Quick Edit</a>
                                      </li>
                                      <li>
                                        <a href="#">View</a>
                                      </li>
                                      <li>
                                        <a href="#">Delete</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* END: Comments */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xs-12 col-sm-12">
                    <div className="portlet light bordered">
                      <div className="portlet-title tabbable-line">
                        <div className="caption">
                          <i className=" icon-social-twitter font-dark hide" />
                          <span className="caption-subject font-dark bold uppercase">Quick Actions</span>
                        </div>
                        <ul className="nav nav-tabs">
                          <li className="active">
                            <a href="#tab_actions_pending" data-toggle="tab"> Pending </a>
                          </li>
                          <li>
                            <a href="#tab_actions_completed" data-toggle="tab"> Completed </a>
                          </li>
                        </ul>
                      </div>
                      <div className="portlet-body">
                        <div className="tab-content">
                          <div className="tab-pane active" id="tab_actions_pending">
                            {/* BEGIN: Actions */}
                            <div className="mt-actions">
                              <div className="mt-action">
                                <div className="mt-action-img">
                                  <img src="styles/pages/media/users/avatar10.jpg" /> </div>
                                <div className="mt-action-body">
                                  <div className="mt-action-row">
                                    <div className="mt-action-info ">
                                      <div className="mt-action-icon ">
                                        <i className="icon-magnet" />
                                      </div>
                                      <div className="mt-action-details ">
                                        <span className="mt-action-author">Natasha Kim</span>
                                        <p className="mt-action-desc">Dummy text of the printing</p>
                                      </div>
                                    </div>
                                    <div className="mt-action-datetime ">
                                      <span className="mt-action-date">3 jun</span>
                                      <span className="mt-action-dot bg-green" />
                                      <span className="mt=action-time">9:30-13:00</span>
                                    </div>
                                    <div className="mt-action-buttons ">
                                      <div className="btn-group btn-group-circle">
                                        <button type="button" className="btn btn-outline green btn-sm">Appove</button>
                                        <button type="button" className="btn btn-outline red btn-sm">Reject</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-action">
                                <div className="mt-action-img">
                                  <img src="styles/pages/media/users/avatar3.jpg" /> </div>
                                <div className="mt-action-body">
                                  <div className="mt-action-row">
                                    <div className="mt-action-info ">
                                      <div className="mt-action-icon ">
                                        <i className=" icon-bubbles" />
                                      </div>
                                      <div className="mt-action-details ">
                                        <span className="mt-action-author">Gavin Bond</span>
                                        <p className="mt-action-desc">pending for approval</p>
                                      </div>
                                    </div>
                                    <div className="mt-action-datetime ">
                                      <span className="mt-action-date">3 jun</span>
                                      <span className="mt-action-dot bg-red" />
                                      <span className="mt=action-time">9:30-13:00</span>
                                    </div>
                                    <div className="mt-action-buttons ">
                                      <div className="btn-group btn-group-circle">
                                        <button type="button" className="btn btn-outline green btn-sm">Appove</button>
                                        <button type="button" className="btn btn-outline red btn-sm">Reject</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-action">
                                <div className="mt-action-img">
                                  <img src="styles/pages/media/users/avatar2.jpg" /> </div>
                                <div className="mt-action-body">
                                  <div className="mt-action-row">
                                    <div className="mt-action-info ">
                                      <div className="mt-action-icon ">
                                        <i className="icon-call-in" />
                                      </div>
                                      <div className="mt-action-details ">
                                        <span className="mt-action-author">Diana Berri</span>
                                        <p className="mt-action-desc">Lorem Ipsum is simply dummy text</p>
                                      </div>
                                    </div>
                                    <div className="mt-action-datetime ">
                                      <span className="mt-action-date">3 jun</span>
                                      <span className="mt-action-dot bg-green" />
                                      <span className="mt=action-time">9:30-13:00</span>
                                    </div>
                                    <div className="mt-action-buttons ">
                                      <div className="btn-group btn-group-circle">
                                        <button type="button" className="btn btn-outline green btn-sm">Appove</button>
                                        <button type="button" className="btn btn-outline red btn-sm">Reject</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-action">
                                <div className="mt-action-img">
                                  <img src="styles/pages/media/users/avatar7.jpg" /> </div>
                                <div className="mt-action-body">
                                  <div className="mt-action-row">
                                    <div className="mt-action-info ">
                                      <div className="mt-action-icon ">
                                        <i className=" icon-bell" />
                                      </div>
                                      <div className="mt-action-details ">
                                        <span className="mt-action-author">John Clark</span>
                                        <p className="mt-action-desc">Text of the printing and typesetting industry</p>
                                      </div>
                                    </div>
                                    <div className="mt-action-datetime ">
                                      <span className="mt-action-date">3 jun</span>
                                      <span className="mt-action-dot bg-red" />
                                      <span className="mt=action-time">9:30-13:00</span>
                                    </div>
                                    <div className="mt-action-buttons ">
                                      <div className="btn-group btn-group-circle">
                                        <button type="button" className="btn btn-outline green btn-sm">Appove</button>
                                        <button type="button" className="btn btn-outline red btn-sm">Reject</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-action">
                                <div className="mt-action-img">
                                  <img src="styles/pages/media/users/avatar8.jpg" /> </div>
                                <div className="mt-action-body">
                                  <div className="mt-action-row">
                                    <div className="mt-action-info ">
                                      <div className="mt-action-icon ">
                                        <i className="icon-magnet" />
                                      </div>
                                      <div className="mt-action-details ">
                                        <span className="mt-action-author">Donna Clarkson </span>
                                        <p className="mt-action-desc">Simply dummy text of the printing</p>
                                      </div>
                                    </div>
                                    <div className="mt-action-datetime ">
                                      <span className="mt-action-date">3 jun</span>
                                      <span className="mt-action-dot bg-green" />
                                      <span className="mt=action-time">9:30-13:00</span>
                                    </div>
                                    <div className="mt-action-buttons ">
                                      <div className="btn-group btn-group-circle">
                                        <button type="button" className="btn btn-outline green btn-sm">Appove</button>
                                        <button type="button" className="btn btn-outline red btn-sm">Reject</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-action">
                                <div className="mt-action-img">
                                  <img src="styles/pages/media/users/avatar9.jpg" /> </div>
                                <div className="mt-action-body">
                                  <div className="mt-action-row">
                                    <div className="mt-action-info ">
                                      <div className="mt-action-icon ">
                                        <i className="icon-magnet" />
                                      </div>
                                      <div className="mt-action-details ">
                                        <span className="mt-action-author">Tom Larson</span>
                                        <p className="mt-action-desc">Lorem Ipsum is simply dummy text</p>
                                      </div>
                                    </div>
                                    <div className="mt-action-datetime ">
                                      <span className="mt-action-date">3 jun</span>
                                      <span className="mt-action-dot bg-green" />
                                      <span className="mt=action-time">9:30-13:00</span>
                                    </div>
                                    <div className="mt-action-buttons ">
                                      <div className="btn-group btn-group-circle">
                                        <button type="button" className="btn btn-outline green btn-sm">Appove</button>
                                        <button type="button" className="btn btn-outline red btn-sm">Reject</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* END: Actions */}
                          </div>
                          <div className="tab-pane" id="tab_actions_completed">
                            {/* BEGIN:Completed*/}
                            <div className="mt-actions">
                              <div className="mt-action">
                                <div className="mt-action-img">
                                  <img src="styles/pages/media/users/avatar1.jpg" /> </div>
                                <div className="mt-action-body">
                                  <div className="mt-action-row">
                                    <div className="mt-action-info ">
                                      <div className="mt-action-icon ">
                                        <i className="icon-action-redo" />
                                      </div>
                                      <div className="mt-action-details ">
                                        <span className="mt-action-author">Frank Cameron</span>
                                        <p className="mt-action-desc">Lorem Ipsum is simply dummy</p>
                                      </div>
                                    </div>
                                    <div className="mt-action-datetime ">
                                      <span className="mt-action-date">3 jun</span>
                                      <span className="mt-action-dot bg-red" />
                                      <span className="mt=action-time">9:30-13:00</span>
                                    </div>
                                    <div className="mt-action-buttons ">
                                      <div className="btn-group btn-group-circle">
                                        <button type="button" className="btn btn-outline green btn-sm">Appove</button>
                                        <button type="button" className="btn btn-outline red btn-sm">Reject</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-action">
                                <div className="mt-action-img">
                                  <img src="styles/pages/media/users/avatar8.jpg" /> </div>
                                <div className="mt-action-body">
                                  <div className="mt-action-row">
                                    <div className="mt-action-info ">
                                      <div className="mt-action-icon ">
                                        <i className="icon-cup" />
                                      </div>
                                      <div className="mt-action-details ">
                                        <span className="mt-action-author">Ella Davidson </span>
                                        <p className="mt-action-desc">Text of the printing and typesetting industry</p>
                                      </div>
                                    </div>
                                    <div className="mt-action-datetime ">
                                      <span className="mt-action-date">3 jun</span>
                                      <span className="mt-action-dot bg-green" />
                                      <span className="mt=action-time">9:30-13:00</span>
                                    </div>
                                    <div className="mt-action-buttons">
                                      <div className="btn-group btn-group-circle">
                                        <button type="button" className="btn btn-outline green btn-sm">Appove</button>
                                        <button type="button" className="btn btn-outline red btn-sm">Reject</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-action">
                                <div className="mt-action-img">
                                  <img src="styles/pages/media/users/avatar5.jpg" /> </div>
                                <div className="mt-action-body">
                                  <div className="mt-action-row">
                                    <div className="mt-action-info ">
                                      <div className="mt-action-icon ">
                                        <i className=" icon-graduation" />
                                      </div>
                                      <div className="mt-action-details ">
                                        <span className="mt-action-author">Jason Dickens </span>
                                        <p className="mt-action-desc">Dummy text of the printing and typesetting industry</p>
                                      </div>
                                    </div>
                                    <div className="mt-action-datetime ">
                                      <span className="mt-action-date">3 jun</span>
                                      <span className="mt-action-dot bg-red" />
                                      <span className="mt=action-time">9:30-13:00</span>
                                    </div>
                                    <div className="mt-action-buttons ">
                                      <div className="btn-group btn-group-circle">
                                        <button type="button" className="btn btn-outline green btn-sm">Appove</button>
                                        <button type="button" className="btn btn-outline red btn-sm">Reject</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-action">
                                <div className="mt-action-img">
                                  <img src="styles/pages/media/users/avatar2.jpg" /> </div>
                                <div className="mt-action-body">
                                  <div className="mt-action-row">
                                    <div className="mt-action-info ">
                                      <div className="mt-action-icon ">
                                        <i className="icon-badge" />
                                      </div>
                                      <div className="mt-action-details ">
                                        <span className="mt-action-author">Jan Kim</span>
                                        <p className="mt-action-desc">Lorem Ipsum is simply dummy</p>
                                      </div>
                                    </div>
                                    <div className="mt-action-datetime ">
                                      <span className="mt-action-date">3 jun</span>
                                      <span className="mt-action-dot bg-green" />
                                      <span className="mt=action-time">9:30-13:00</span>
                                    </div>
                                    <div className="mt-action-buttons ">
                                      <div className="btn-group btn-group-circle">
                                        <button type="button" className="btn btn-outline green btn-sm">Appove</button>
                                        <button type="button" className="btn btn-outline red btn-sm">Reject</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* END: Completed */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-xs-12 col-sm-12">
                    <div className="portlet light portlet-fit bordered">
                      <div className="portlet-title">
                        <div className="caption">
                          <i className="icon-directions font-green hide" />
                          <span className="caption-subject bold font-dark uppercase "> Activities</span>
                          <span className="caption-helper">Horizontal Timeline</span>
                        </div>
                        <div className="actions">
                          <div className="btn-group">
                            <a className="btn blue btn-outline btn-circle btn-sm" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> Actions
                              <i className="fa fa-angle-down" />
                            </a>
                            <ul className="dropdown-menu pull-right">
                              <li>
                                <a href="javascript:;"> Action 1</a>
                              </li>
                              <li className="divider"> </li>
                              <li>
                                <a href="javascript:;">Action 2</a>
                              </li>
                              <li>
                                <a href="javascript:;">Action 3</a>
                              </li>
                              <li>
                                <a href="javascript:;">Action 4</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="portlet-body">
                        <div className="cd-horizontal-timeline mt-timeline-horizontal" data-spacing={60}>
                          <div className="timeline">
                            <div className="events-wrapper">
                              <div className="events">
                                <ol>
                                  <li>
                                    <a href="#0" data-date="16/01/2014" className="border-after-red bg-after-red selected">16 Jan</a>
                                  </li>
                                  <li>
                                    <a href="#0" data-date="28/02/2014" className="border-after-red bg-after-red">28 Feb</a>
                                  </li>
                                  <li>
                                    <a href="#0" data-date="20/04/2014" className="border-after-red bg-after-red">20 Mar</a>
                                  </li>
                                  <li>
                                    <a href="#0" data-date="20/05/2014" className="border-after-red bg-after-red">20 May</a>
                                  </li>
                                  <li>
                                    <a href="#0" data-date="09/07/2014" className="border-after-red bg-after-red">09 Jul</a>
                                  </li>
                                  <li>
                                    <a href="#0" data-date="30/08/2014" className="border-after-red bg-after-red">30 Aug</a>
                                  </li>
                                  <li>
                                    <a href="#0" data-date="15/09/2014" className="border-after-red bg-after-red">15 Sep</a>
                                  </li>
                                  <li>
                                    <a href="#0" data-date="01/11/2014" className="border-after-red bg-after-red">01 Nov</a>
                                  </li>
                                  <li>
                                    <a href="#0" data-date="10/12/2014" className="border-after-red bg-after-red">10 Dec</a>
                                  </li>
                                  <li>
                                    <a href="#0" data-date="19/01/2015" className="border-after-red bg-after-red">29 Jan</a>
                                  </li>
                                  <li>
                                    <a href="#0" data-date="03/03/2015" className="border-after-red bg-after-red">3 Mar</a>
                                  </li>
                                </ol>
                                <span className="filling-line bg-red" aria-hidden="true" />
                              </div>
                              {/* .events */}
                            </div>
                            {/* .events-wrapper */}
                            <ul className="cd-timeline-navigation mt-ht-nav-icon">
                              <li>
                                <a href="#0" className="prev inactive btn btn-outline red md-skip">
                                  <i className="fa fa-chevron-left" />
                                </a>
                              </li>
                              <li>
                                <a href="#0" className="next btn btn-outline red md-skip">
                                  <i className="fa fa-chevron-right" />
                                </a>
                              </li>
                            </ul>
                            {/* .cd-timeline-navigation */}
                          </div>
                          {/* .timeline */}
                          <div className="events-content">
                            <ol>
                              <li className="selected" data-date="16/01/2014">
                                <div className="mt-title">
                                  <h2 className="mt-content-title">New User</h2>
                                </div>
                                <div className="mt-author">
                                  <div className="mt-avatar">
                                    <img src="styles/pages/media/users/avatar80_3.jpg" />
                                  </div>
                                  <div className="mt-author-name">
                                    <a href="javascript:;" className="font-blue-madison">Andres Iniesta</a>
                                  </div>
                                  <div className="mt-author-datetime font-grey-mint">16 January 2014 : 7:45 PM</div>
                                </div>
                                <div className="clearfix" />
                                <div className="mt-content border-grey-steel">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod eleifend ipsum, at posuere augue. Pellentesque mi felis, aliquam at iaculis eu, mi felis, aliquam at iaculis mi felis, aliquam
                                    at iaculis finibus eu ex. Integer efficitur tincidunt malesuada. Sed sit amet molestie elit, vel placerat ipsum. Ut consectetur odio non est rhoncus volutpat.</p>
                                  <a href="javascript:;" className="btn btn-circle red btn-outline">Read More</a>
                                  <a href="javascript:;" className="btn btn-circle btn-icon-only blue">
                                    <i className="fa fa-plus" />
                                  </a>
                                  <a href="javascript:;" className="btn btn-circle btn-icon-only green pull-right">
                                    <i className="fa fa-twitter" />
                                  </a>
                                </div>
                              </li>
                              <li data-date="28/02/2014">
                                <div className="mt-title">
                                  <h2 className="mt-content-title">Sending Shipment</h2>
                                </div>
                                <div className="mt-author">
                                  <div className="mt-avatar">
                                    <img src="styles/pages/media/users/avatar80_3.jpg" />
                                  </div>
                                  <div className="mt-author-name">
                                    <a href="javascript:;" className="font-blue-madison">Hugh Grant</a>
                                  </div>
                                  <div className="mt-author-datetime font-grey-mint">28 February 2014 : 10:15 AM</div>
                                </div>
                                <div className="clearfix" />
                                <div className="mt-content border-grey-steel">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod eleifend ipsum, at posuere augue. Pellentesque mi felis, aliquam at iaculis eu, finibus eu ex. Integer efficitur leo eget
                                    dolor tincidunt, et dignissim risus lacinia. Nam in egestas nunc. Suspendisse potenti. Cras ullamcorper tincidunt malesuada. Sed sit amet molestie elit, vel placerat ipsum. Ut consectetur
                                    odio non est rhoncus volutpat. Nullam interdum, neque quis vehicula ornare, lacus elit dignissim purus, quis ultrices erat tortor eget felis. Cras commodo id massa at condimentum. Praesent
                                    dignissim luctus risus sed sodales.</p>
                                  <a href="javascript:;" className="btn btn-circle btn-outline green-jungle">Download Shipment List</a>
                                  <div className="btn-group dropup pull-right">
                                    <button className="btn btn-circle blue-steel dropdown-toggle" type="button" data-toggle="dropdown" data-hover="dropdown" data-close-others="true" aria-expanded="false"> Actions
                                      <i className="fa fa-angle-down" />
                                    </button>
                                    <ul className="dropdown-menu pull-right" role="menu">
                                      <li>
                                        <a href="javascript:;">Action </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">Another action </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">Something else here </a>
                                      </li>
                                      <li className="divider"> </li>
                                      <li>
                                        <a href="javascript:;">Separated link </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li data-date="20/04/2014">
                                <div className="mt-title">
                                  <h2 className="mt-content-title">Blue Chambray</h2>
                                </div>
                                <div className="mt-author">
                                  <div className="mt-avatar">
                                    <img src="styles/pages/media/users/avatar80_1.jpg" />
                                  </div>
                                  <div className="mt-author-name">
                                    <a href="javascript:;" className="font-blue">Rory Matthew</a>
                                  </div>
                                  <div className="mt-author-datetime font-grey-mint">20 April 2014 : 10:45 PM</div>
                                </div>
                                <div className="clearfix" />
                                <div className="mt-content border-grey-steel">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod eleifend ipsum, at posuere augue. Pellentesque mi felis, aliquam at iaculis eu, finibus eu ex. Integer efficitur leo eget
                                    dolor tincidunt, et dignissim risus lacinia. Nam in egestas nunc. Suspendisse potenti. Cras ullamcorper tincidunt malesuada. Sed sit amet molestie elit, vel placerat ipsum. Ut consectetur
                                    odio non est rhoncus volutpat. Nullam interdum, neque quis vehicula ornare, lacus elit dignissim purus, quis ultrices erat tortor eget felis. Cras commodo id massa at condimentum. Praesent
                                    dignissim luctus risus sed sodales.</p>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis
                                    qui ut. laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut. </p>
                                  <a href="javascript:;" className="btn btn-circle red">Read More</a>
                                </div>
                              </li>
                              <li data-date="20/05/2014">
                                <div className="mt-title">
                                  <h2 className="mt-content-title">Timeline Received</h2>
                                </div>
                                <div className="mt-author">
                                  <div className="mt-avatar">
                                    <img src="styles/pages/media/users/avatar80_2.jpg" />
                                  </div>
                                  <div className="mt-author-name">
                                    <a href="javascript:;" className="font-blue-madison">Andres Iniesta</a>
                                  </div>
                                  <div className="mt-author-datetime font-grey-mint">20 May 2014 : 12:20 PM</div>
                                </div>
                                <div className="clearfix" />
                                <div className="mt-content border-grey-steel">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod eleifend ipsum, at posuere augue. Pellentesque mi felis, aliquam at iaculis eu, finibus eu ex. Integer efficitur leo eget
                                    dolor tincidunt, et dignissim risus lacinia. Nam in egestas nunc. Suspendisse potenti. Cras ullamcorper tincidunt malesuada. Sed sit amet molestie elit, vel placerat ipsum. Ut consectetur
                                    odio non est rhoncus volutpat. Nullam interdum, neque quis vehicula ornare, lacus elit dignissim purus, quis ultrices erat tortor eget felis. Cras commodo id massa at condimentum. Praesent
                                    dignissim luctus risus sed sodales.</p>
                                  <a href="javascript:;" className="btn btn-circle green-turquoise">Read More</a>
                                </div>
                              </li>
                              <li data-date="09/07/2014">
                                <div className="mt-title">
                                  <h2 className="mt-content-title">Event Success</h2>
                                </div>
                                <div className="mt-author">
                                  <div className="mt-avatar">
                                    <img src="styles/pages/media/users/avatar80_1.jpg" />
                                  </div>
                                  <div className="mt-author-name">
                                    <a href="javascript:;" className="font-blue-madison">Matt Goldman</a>
                                  </div>
                                  <div className="mt-author-datetime font-grey-mint">9 July 2014 : 8:15 PM</div>
                                </div>
                                <div className="clearfix" />
                                <div className="mt-content border-grey-steel">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde.</p>
                                  <a href="javascript:;" className="btn btn-circle btn-outline purple-medium">View Summary</a>
                                  <div className="btn-group dropup pull-right">
                                    <button className="btn btn-circle green dropdown-toggle" type="button" data-toggle="dropdown" data-hover="dropdown" data-close-others="true" aria-expanded="false"> Actions
                                      <i className="fa fa-angle-down" />
                                    </button>
                                    <ul className="dropdown-menu pull-right" role="menu">
                                      <li>
                                        <a href="javascript:;">Action </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">Another action </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">Something else here </a>
                                      </li>
                                      <li className="divider"> </li>
                                      <li>
                                        <a href="javascript:;">Separated link </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li data-date="30/08/2014">
                                <div className="mt-title">
                                  <h2 className="mt-content-title">Conference Call</h2>
                                </div>
                                <div className="mt-author">
                                  <div className="mt-avatar">
                                    <img src="styles/pages/media/users/avatar80_1.jpg" />
                                  </div>
                                  <div className="mt-author-name">
                                    <a href="javascript:;" className="font-blue-madison">Rory Matthew</a>
                                  </div>
                                  <div className="mt-author-datetime font-grey-mint">30 August 2014 : 5:45 PM</div>
                                </div>
                                <div className="clearfix" />
                                <div className="mt-content border-grey-steel">
                                  <img className="timeline-body-img pull-left" src="styles/pages/media/blog/5.jpg" alt />
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis
                                    qui ut. laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut. </p>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis
                                    qui ut. laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut. </p>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis
                                    qui ut. laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut. </p>
                                  <a href="javascript:;" className="btn btn-circle red">Read More</a>
                                </div>
                              </li>
                              <li data-date="15/09/2014">
                                <div className="mt-title">
                                  <h2 className="mt-content-title">Conference Decision</h2>
                                </div>
                                <div className="mt-author">
                                  <div className="mt-avatar">
                                    <img src="styles/pages/media/users/avatar80_5.jpg" />
                                  </div>
                                  <div className="mt-author-name">
                                    <a href="javascript:;" className="font-blue-madison">Jessica Wolf</a>
                                  </div>
                                  <div className="mt-author-datetime font-grey-mint">15 September 2014 : 8:30 PM</div>
                                </div>
                                <div className="clearfix" />
                                <div className="mt-content border-grey-steel">
                                  <img className="timeline-body-img pull-right" src="styles/pages/media/blog/6.jpg" alt />
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis
                                    qui ut.</p>
                                  <a href="javascript:;" className="btn btn-circle green-sharp">Read More</a>
                                </div>
                              </li>
                              <li data-date="01/11/2014">
                                <div className="mt-title">
                                  <h2 className="mt-content-title">Timeline Received</h2>
                                </div>
                                <div className="mt-author">
                                  <div className="mt-avatar">
                                    <img src="styles/pages/media/users/avatar80_2.jpg" />
                                  </div>
                                  <div className="mt-author-name">
                                    <a href="javascript:;" className="font-blue-madison">Andres Iniesta</a>
                                  </div>
                                  <div className="mt-author-datetime font-grey-mint">1 November 2014 : 12:20 PM</div>
                                </div>
                                <div className="clearfix" />
                                <div className="mt-content border-grey-steel">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod eleifend ipsum, at posuere augue. Pellentesque mi felis, aliquam at iaculis eu, finibus eu ex. Integer efficitur leo eget
                                    dolor tincidunt, et dignissim risus lacinia. Nam in egestas nunc. Suspendisse potenti. Cras ullamcorper tincidunt malesuada. Sed sit amet molestie elit, vel placerat ipsum. Ut consectetur
                                    odio non est rhoncus volutpat. Nullam interdum, neque quis vehicula ornare, lacus elit dignissim purus, quis ultrices erat tortor eget felis. Cras commodo id massa at condimentum. Praesent
                                    dignissim luctus risus sed sodales.</p>
                                  <a href="javascript:;" className="btn btn-circle green-turquoise">Read More</a>
                                </div>
                              </li>
                              <li data-date="10/12/2014">
                                <div className="mt-title">
                                  <h2 className="mt-content-title">Timeline Received</h2>
                                </div>
                                <div className="mt-author">
                                  <div className="mt-avatar">
                                    <img src="styles/pages/media/users/avatar80_2.jpg" />
                                  </div>
                                  <div className="mt-author-name">
                                    <a href="javascript:;" className="font-blue-madison">Andres Iniesta</a>
                                  </div>
                                  <div className="mt-author-datetime font-grey-mint">10 December 2015 : 12:20 PM</div>
                                </div>
                                <div className="clearfix" />
                                <div className="mt-content border-grey-steel">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod eleifend ipsum, at posuere augue. Pellentesque mi felis, aliquam at iaculis eu, finibus eu ex. Integer efficitur leo eget
                                    dolor tincidunt, et dignissim risus lacinia. Nam in egestas nunc. Suspendisse potenti. Cras ullamcorper tincidunt malesuada. Sed sit amet molestie elit, vel placerat ipsum. Ut consectetur
                                    odio non est rhoncus volutpat. Nullam interdum, neque quis vehicula ornare, lacus elit dignissim purus, quis ultrices erat tortor eget felis. Cras commodo id massa at condimentum. Praesent
                                    dignissim luctus risus sed sodales.</p>
                                  <a href="javascript:;" className="btn btn-circle green-turquoise">Read More</a>
                                </div>
                              </li>
                              <li data-date="19/01/2015">
                                <div className="mt-title">
                                  <h2 className="mt-content-title">Timeline Received</h2>
                                </div>
                                <div className="mt-author">
                                  <div className="mt-avatar">
                                    <img src="styles/pages/media/users/avatar80_2.jpg" />
                                  </div>
                                  <div className="mt-author-name">
                                    <a href="javascript:;" className="font-blue-madison">Andres Iniesta</a>
                                  </div>
                                  <div className="mt-author-datetime font-grey-mint">19 January 2015 : 12:20 PM</div>
                                </div>
                                <div className="clearfix" />
                                <div className="mt-content border-grey-steel">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod eleifend ipsum, at posuere augue. Pellentesque mi felis, aliquam at iaculis eu, finibus eu ex. Integer efficitur leo eget
                                    dolor tincidunt, et dignissim risus lacinia. Nam in egestas nunc. Suspendisse potenti. Cras ullamcorper tincidunt malesuada. Sed sit amet molestie elit, vel placerat ipsum. Ut consectetur
                                    odio non est rhoncus volutpat. Nullam interdum, neque quis vehicula ornare, lacus elit dignissim purus, quis ultrices erat tortor eget felis. Cras commodo id massa at condimentum. Praesent
                                    dignissim luctus risus sed sodales.</p>
                                  <a href="javascript:;" className="btn btn-circle green-turquoise">Read More</a>
                                </div>
                              </li>
                              <li data-date="03/03/2015">
                                <div className="mt-title">
                                  <h2 className="mt-content-title">Timeline Received</h2>
                                </div>
                                <div className="mt-author">
                                  <div className="mt-avatar">
                                    <img src="styles/pages/media/users/avatar80_2.jpg" />
                                  </div>
                                  <div className="mt-author-name">
                                    <a href="javascript:;" className="font-blue-madison">Andres Iniesta</a>
                                  </div>
                                  <div className="mt-author-datetime font-grey-mint">3 March 2015 : 12:20 PM</div>
                                </div>
                                <div className="clearfix" />
                                <div className="mt-content border-grey-steel">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod eleifend ipsum, at posuere augue. Pellentesque mi felis, aliquam at iaculis eu, finibus eu ex. Integer efficitur leo eget
                                    dolor tincidunt, et dignissim risus lacinia. Nam in egestas nunc. Suspendisse potenti. Cras ullamcorper tincidunt malesuada. Sed sit amet molestie elit, vel placerat ipsum. Ut consectetur
                                    odio non est rhoncus volutpat. Nullam interdum, neque quis vehicula ornare, lacus elit dignissim purus, quis ultrices erat tortor eget felis. Cras commodo id massa at condimentum. Praesent
                                    dignissim luctus risus sed sodales.</p>
                                  <a href="javascript:;" className="btn btn-circle green-turquoise">Read More</a>
                                </div>
                              </li>
                            </ol>
                          </div>
                          {/* .events-content */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xs-12 col-sm-12">
                    <div className="portlet light portlet-fit bordered">
                      <div className="portlet-title">
                        <div className="caption">
                          <i className="icon-directions font-green hide" />
                          <span className="caption-subject bold font-dark uppercase"> Events</span>
                          <span className="caption-helper">Horizontal Timeline</span>
                        </div>
                        <div className="actions">
                          <div className="btn-group btn-group-devided" data-toggle="buttons">
                            <label className="btn green btn-outline btn-circle btn-sm active">
                              <input type="radio" name="options" className="toggle" id="option1" />Actions</label>
                            <label className="btn  green btn-outline btn-circle btn-sm">
                              <input type="radio" name="options" className="toggle" id="option2" />Tools</label>
                          </div>
                        </div>
                      </div>
                      <div className="portlet-body">
                        <div className="cd-horizontal-timeline mt-timeline-horizontal" data-spacing={60}>
                          <div className="timeline mt-timeline-square">
                            <div className="events-wrapper">
                              <div className="events">
                                <ol>
                                  <li>
                                    <a href="#0" data-date="16/01/2014" className="border-after-blue bg-after-blue selected">Expo 2016</a>
                                  </li>
                                  <li>
                                    <a href="#0" data-date="28/02/2014" className="border-after-blue bg-after-blue">New Promo</a>
                                  </li>
                                  <li>
                                    <a href="#0" data-date="20/04/2014" className="border-after-blue bg-after-blue">Meeting</a>
                                  </li>
                                  <li>
                                    <a href="#0" data-date="20/05/2014" className="border-after-blue bg-after-blue">Launch</a>
                                  </li>
                                  <li>
                                    <a href="#0" data-date="09/07/2014" className="border-after-blue bg-after-blue">Party</a>
                                  </li>
                                  <li>
                                    <a href="#0" data-date="30/08/2014" className="border-after-blue bg-after-blue">Reports</a>
                                  </li>
                                  <li>
                                    <a href="#0" data-date="15/09/2014" className="border-after-blue bg-after-blue">HR</a>
                                  </li>
                                  <li>
                                    <a href="#0" data-date="01/11/2014" className="border-after-blue bg-after-blue">IPO</a>
                                  </li>
                                  <li>
                                    <a href="#0" data-date="10/12/2014" className="border-after-blue bg-after-blue">Board</a>
                                  </li>
                                  <li>
                                    <a href="#0" data-date="19/01/2015" className="border-after-blue bg-after-blue">Revenue</a>
                                  </li>
                                  <li>
                                    <a href="#0" data-date="03/03/2015" className="border-after-blue bg-after-blue">Dinner</a>
                                  </li>
                                </ol>
                                <span className="filling-line bg-blue" aria-hidden="true" />
                              </div>
                              {/* .events */}
                            </div>
                            {/* .events-wrapper */}
                            <ul className="cd-timeline-navigation mt-ht-nav-icon">
                              <li>
                                <a href="#0" className="prev inactive btn blue md-skip">
                                  <i className="fa fa-chevron-left" />
                                </a>
                              </li>
                              <li>
                                <a href="#0" className="next btn blue md-skip">
                                  <i className="fa fa-chevron-right" />
                                </a>
                              </li>
                            </ul>
                            {/* .cd-timeline-navigation */}
                          </div>
                          {/* .timeline */}
                          <div className="events-content">
                            <ol>
                              <li className="selected" data-date="16/01/2014">
                                <div className="mt-title">
                                  <h2 className="mt-content-title">Expo 2016 Launch</h2>
                                </div>
                                <div className="mt-author">
                                  <div className="mt-avatar">
                                    <img src="styles/pages/media/users/avatar80_2.jpg" />
                                  </div>
                                  <div className="mt-author-name">
                                    <a href="javascript:;" className="font-blue-madison">Lisa Bold</a>
                                  </div>
                                  <div className="mt-author-datetime font-grey-mint">23 February 2014</div>
                                </div>
                                <div className="clearfix" />
                                <div className="mt-content border-grey-steel">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod mi felis, aliquam at iaculis eleifend ipsum, at posuere augue. Pellentesque mi felis, aliquam at iaculis mi felis, aliquam
                                    at iaculis eu, onsectetur adipiscing elit finibus eu ex. Integer efficitur leo eget dolor tincidunt, et dignissim risus lacinia. Nam in egestas onsectetur adipiscing elit nunc. Suspendisse
                                    potenti</p>
                                  <a href="javascript:;" className="btn btn-circle dark btn-outline">Read More</a>
                                  <a href="javascript:;" className="btn btn-circle btn-icon-only green pull-right">
                                    <i className="fa fa-twitter" />
                                  </a>
                                </div>
                              </li>
                              <li data-date="28/02/2014">
                                <div className="mt-title">
                                  <h2 className="mt-content-title">Sending Shipment</h2>
                                </div>
                                <div className="mt-author">
                                  <div className="mt-avatar">
                                    <img src="styles/pages/media/users/avatar80_3.jpg" />
                                  </div>
                                  <div className="mt-author-name">
                                    <a href="javascript:;" className="font-blue-madison">Hugh Grant</a>
                                  </div>
                                  <div className="mt-author-datetime font-grey-mint">28 February 2014 : 10:15 AM</div>
                                </div>
                                <div className="clearfix" />
                                <div className="mt-content border-grey-steel">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod eleifend ipsum, at posuere augue. Pellentesque mi felis, aliquam at iaculis eu, finibus eu ex. Integer efficitur leo eget
                                    dolor tincidunt, et dignissim risus lacinia. Nam in egestas nunc. Suspendisse potenti. Cras ullamcorper tincidunt malesuada. Sed sit amet molestie elit, vel placerat ipsum. Ut consectetur
                                    odio non est rhoncus volutpat. Nullam interdum, neque quis vehicula ornare, lacus elit dignissim purus, quis ultrices erat tortor eget felis. Cras commodo id massa at condimentum. Praesent
                                    dignissim luctus risus sed sodales.</p>
                                  <a href="javascript:;" className="btn btn-circle btn-outline green-jungle">Download Shipment List</a>
                                  <div className="btn-group dropup pull-right">
                                    <button className="btn btn-circle blue-steel dropdown-toggle" type="button" data-toggle="dropdown" data-hover="dropdown" data-close-others="true" aria-expanded="false"> Actions
                                      <i className="fa fa-angle-down" />
                                    </button>
                                    <ul className="dropdown-menu pull-right" role="menu">
                                      <li>
                                        <a href="javascript:;">Action </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">Another action </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">Something else here </a>
                                      </li>
                                      <li className="divider"> </li>
                                      <li>
                                        <a href="javascript:;">Separated link </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li data-date="20/04/2014">
                                <div className="mt-title">
                                  <h2 className="mt-content-title">Blue Chambray</h2>
                                </div>
                                <div className="mt-author">
                                  <div className="mt-avatar">
                                    <img src="styles/pages/media/users/avatar80_1.jpg" />
                                  </div>
                                  <div className="mt-author-name">
                                    <a href="javascript:;" className="font-blue">Rory Matthew</a>
                                  </div>
                                  <div className="mt-author-datetime font-grey-mint">20 April 2014 : 10:45 PM</div>
                                </div>
                                <div className="clearfix" />
                                <div className="mt-content border-grey-steel">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod eleifend ipsum, at posuere augue. Pellentesque mi felis, aliquam at iaculis eu, finibus eu ex. Integer efficitur leo eget
                                    dolor tincidunt, et dignissim risus lacinia. Nam in egestas nunc. Suspendisse potenti. Cras ullamcorper tincidunt malesuada. Sed sit amet molestie elit, vel placerat ipsum. Ut consectetur
                                    odio non est rhoncus volutpat. Nullam interdum, neque quis vehicula ornare, lacus elit dignissim purus, quis ultrices erat tortor eget felis. Cras commodo id massa at condimentum. Praesent
                                    dignissim luctus risus sed sodales.</p>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis
                                    qui ut. laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut. </p>
                                  <a href="javascript:;" className="btn btn-circle red">Read More</a>
                                </div>
                              </li>
                              <li data-date="20/05/2014">
                                <div className="mt-title">
                                  <h2 className="mt-content-title">Timeline Received</h2>
                                </div>
                                <div className="mt-author">
                                  <div className="mt-avatar">
                                    <img src="styles/pages/media/users/avatar80_2.jpg" />
                                  </div>
                                  <div className="mt-author-name">
                                    <a href="javascript:;" className="font-blue-madison">Andres Iniesta</a>
                                  </div>
                                  <div className="mt-author-datetime font-grey-mint">20 May 2014 : 12:20 PM</div>
                                </div>
                                <div className="clearfix" />
                                <div className="mt-content border-grey-steel">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod eleifend ipsum, at posuere augue. Pellentesque mi felis, aliquam at iaculis eu, finibus eu ex. Integer efficitur leo eget
                                    dolor tincidunt, et dignissim risus lacinia. Nam in egestas nunc. Suspendisse potenti. Cras ullamcorper tincidunt malesuada. Sed sit amet molestie elit, vel placerat ipsum. Ut consectetur
                                    odio non est rhoncus volutpat. Nullam interdum, neque quis vehicula ornare, lacus elit dignissim purus, quis ultrices erat tortor eget felis. Cras commodo id massa at condimentum. Praesent
                                    dignissim luctus risus sed sodales.</p>
                                  <a href="javascript:;" className="btn btn-circle green-turquoise">Read More</a>
                                </div>
                              </li>
                              <li data-date="09/07/2014">
                                <div className="mt-title">
                                  <h2 className="mt-content-title">Event Success</h2>
                                </div>
                                <div className="mt-author">
                                  <div className="mt-avatar">
                                    <img src="styles/pages/media/users/avatar80_1.jpg" />
                                  </div>
                                  <div className="mt-author-name">
                                    <a href="javascript:;" className="font-blue-madison">Matt Goldman</a>
                                  </div>
                                  <div className="mt-author-datetime font-grey-mint">9 July 2014 : 8:15 PM</div>
                                </div>
                                <div className="clearfix" />
                                <div className="mt-content border-grey-steel">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde.</p>
                                  <a href="javascript:;" className="btn btn-circle btn-outline purple-medium">View Summary</a>
                                  <div className="btn-group dropup pull-right">
                                    <button className="btn btn-circle green dropdown-toggle" type="button" data-toggle="dropdown" data-hover="dropdown" data-close-others="true" aria-expanded="false"> Actions
                                      <i className="fa fa-angle-down" />
                                    </button>
                                    <ul className="dropdown-menu pull-right" role="menu">
                                      <li>
                                        <a href="javascript:;">Action </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">Another action </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">Something else here </a>
                                      </li>
                                      <li className="divider"> </li>
                                      <li>
                                        <a href="javascript:;">Separated link </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li data-date="30/08/2014">
                                <div className="mt-title">
                                  <h2 className="mt-content-title">Conference Call</h2>
                                </div>
                                <div className="mt-author">
                                  <div className="mt-avatar">
                                    <img src="styles/pages/media/users/avatar80_1.jpg" />
                                  </div>
                                  <div className="mt-author-name">
                                    <a href="javascript:;" className="font-blue-madison">Rory Matthew</a>
                                  </div>
                                  <div className="mt-author-datetime font-grey-mint">30 August 2014 : 5:45 PM</div>
                                </div>
                                <div className="clearfix" />
                                <div className="mt-content border-grey-steel">
                                  <img className="timeline-body-img pull-left" src="styles/pages/media/blog/5.jpg" alt />
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis
                                    qui ut. laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut. </p>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis
                                    qui ut. laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut. </p>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis
                                    qui ut. laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut. </p>
                                  <a href="javascript:;" className="btn btn-circle red">Read More</a>
                                </div>
                              </li>
                              <li data-date="15/09/2014">
                                <div className="mt-title">
                                  <h2 className="mt-content-title">Conference Decision</h2>
                                </div>
                                <div className="mt-author">
                                  <div className="mt-avatar">
                                    <img src="styles/pages/media/users/avatar80_5.jpg" />
                                  </div>
                                  <div className="mt-author-name">
                                    <a href="javascript:;" className="font-blue-madison">Jessica Wolf</a>
                                  </div>
                                  <div className="mt-author-datetime font-grey-mint">15 September 2014 : 8:30 PM</div>
                                </div>
                                <div className="clearfix" />
                                <div className="mt-content border-grey-steel">
                                  <img className="timeline-body-img pull-right" src="styles/pages/media/blog/6.jpg" alt />
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis
                                    qui ut.</p>
                                  <a href="javascript:;" className="btn btn-circle green-sharp">Read More</a>
                                </div>
                              </li>
                              <li data-date="01/11/2014">
                                <div className="mt-title">
                                  <h2 className="mt-content-title">Timeline Received</h2>
                                </div>
                                <div className="mt-author">
                                  <div className="mt-avatar">
                                    <img src="styles/pages/media/users/avatar80_2.jpg" />
                                  </div>
                                  <div className="mt-author-name">
                                    <a href="javascript:;" className="font-blue-madison">Andres Iniesta</a>
                                  </div>
                                  <div className="mt-author-datetime font-grey-mint">1 November 2014 : 12:20 PM</div>
                                </div>
                                <div className="clearfix" />
                                <div className="mt-content border-grey-steel">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod eleifend ipsum, at posuere augue. Pellentesque mi felis, aliquam at iaculis eu, finibus eu ex. Integer efficitur leo eget
                                    dolor tincidunt, et dignissim risus lacinia. Nam in egestas nunc. Suspendisse potenti. Cras ullamcorper tincidunt malesuada. Sed sit amet molestie elit, vel placerat ipsum. Ut consectetur
                                    odio non est rhoncus volutpat. Nullam interdum, neque quis vehicula ornare, lacus elit dignissim purus, quis ultrices erat tortor eget felis. Cras commodo id massa at condimentum. Praesent
                                    dignissim luctus risus sed sodales.</p>
                                  <a href="javascript:;" className="btn btn-circle green-turquoise">Read More</a>
                                </div>
                              </li>
                              <li data-date="10/12/2014">
                                <div className="mt-title">
                                  <h2 className="mt-content-title">Timeline Received</h2>
                                </div>
                                <div className="mt-author">
                                  <div className="mt-avatar">
                                    <img src="styles/pages/media/users/avatar80_2.jpg" />
                                  </div>
                                  <div className="mt-author-name">
                                    <a href="javascript:;" className="font-blue-madison">Andres Iniesta</a>
                                  </div>
                                  <div className="mt-author-datetime font-grey-mint">10 December 2014 : 12:20 PM</div>
                                </div>
                                <div className="clearfix" />
                                <div className="mt-content border-grey-steel">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod eleifend ipsum, at posuere augue. Pellentesque mi felis, aliquam at iaculis eu, finibus eu ex. Integer efficitur leo eget
                                    dolor tincidunt, et dignissim risus lacinia. Nam in egestas nunc. Suspendisse potenti. Cras ullamcorper tincidunt malesuada. Sed sit amet molestie elit, vel placerat ipsum. Ut consectetur
                                    odio non est rhoncus volutpat. Nullam interdum, neque quis vehicula ornare, lacus elit dignissim purus, quis ultrices erat tortor eget felis. Cras commodo id massa at condimentum. Praesent
                                    dignissim luctus risus sed sodales.</p>
                                  <a href="javascript:;" className="btn btn-circle green-turquoise">Read More</a>
                                </div>
                              </li>
                              <li data-date="19/01/2015">
                                <div className="mt-title">
                                  <h2 className="mt-content-title">Timeline Received</h2>
                                </div>
                                <div className="mt-author">
                                  <div className="mt-avatar">
                                    <img src="styles/pages/media/users/avatar80_2.jpg" />
                                  </div>
                                  <div className="mt-author-name">
                                    <a href="javascript:;" className="font-blue-madison">Andres Iniesta</a>
                                  </div>
                                  <div className="mt-author-datetime font-grey-mint">19 January 2015 : 12:20 PM</div>
                                </div>
                                <div className="clearfix" />
                                <div className="mt-content border-grey-steel">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod eleifend ipsum, at posuere augue. Pellentesque mi felis, aliquam at iaculis eu, finibus eu ex. Integer efficitur leo eget
                                    dolor tincidunt, et dignissim risus lacinia. Nam in egestas nunc. Suspendisse potenti. Cras ullamcorper tincidunt malesuada. Sed sit amet molestie elit, vel placerat ipsum. Ut consectetur
                                    odio non est rhoncus volutpat. Nullam interdum, neque quis vehicula ornare, lacus elit dignissim purus, quis ultrices erat tortor eget felis. Cras commodo id massa at condimentum. Praesent
                                    dignissim luctus risus sed sodales.</p>
                                  <a href="javascript:;" className="btn btn-circle green-turquoise">Read More</a>
                                </div>
                              </li>
                              <li data-date="03/03/2015">
                                <div className="mt-title">
                                  <h2 className="mt-content-title">Timeline Received</h2>
                                </div>
                                <div className="mt-author">
                                  <div className="mt-avatar">
                                    <img src="styles/pages/media/users/avatar80_2.jpg" />
                                  </div>
                                  <div className="mt-author-name">
                                    <a href="javascript:;" className="font-blue-madison">Andres Iniesta</a>
                                  </div>
                                  <div className="mt-author-datetime font-grey-mint">3 March 2015 : 12:20 PM</div>
                                </div>
                                <div className="clearfix" />
                                <div className="mt-content border-grey-steel">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod eleifend ipsum, at posuere augue. Pellentesque mi felis, aliquam at iaculis eu, finibus eu ex. Integer efficitur leo eget
                                    dolor tincidunt, et dignissim risus lacinia. Nam in egestas nunc. Suspendisse potenti. Cras ullamcorper tincidunt malesuada. Sed sit amet molestie elit, vel placerat ipsum. Ut consectetur
                                    odio non est rhoncus volutpat. Nullam interdum, neque quis vehicula ornare, lacus elit dignissim purus, quis ultrices erat tortor eget felis. Cras commodo id massa at condimentum. Praesent
                                    dignissim luctus risus sed sodales.</p>
                                  <a href="javascript:;" className="btn btn-circle green-turquoise">Read More</a>
                                </div>
                              </li>
                            </ol>
                          </div>
                          {/* .events-content */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-xs-12 col-sm-12">
                    <div className="portlet light bordered">
                      <div className="portlet-title">
                        <div className="caption">
                          <i className="icon-share font-dark hide" />
                          <span className="caption-subject font-dark bold uppercase">Recent Activities</span>
                        </div>
                        <div className="actions">
                          <div className="btn-group">
                            <a className="btn btn-sm blue btn-outline btn-circle" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> Filter By
                              <i className="fa fa-angle-down" />
                            </a>
                            <div className="dropdown-menu hold-on-click dropdown-checkboxes pull-right">
                              <label className="mt-checkbox mt-checkbox-outline">
                                <input type="checkbox" /> Finance
                                <span />
                              </label>
                              <label className="mt-checkbox mt-checkbox-outline">
                                <input type="checkbox" defaultChecked /> Membership
                                <span />
                              </label>
                              <label className="mt-checkbox mt-checkbox-outline">
                                <input type="checkbox" /> Customer Support
                                <span />
                              </label>
                              <label className="mt-checkbox mt-checkbox-outline">
                                <input type="checkbox" defaultChecked /> HR
                                <span />
                              </label>
                              <label className="mt-checkbox mt-checkbox-outline">
                                <input type="checkbox" /> System
                                <span />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="portlet-body">
                        <div className="scroller" style={{height: 300}} data-always-visible={1} data-rail-visible={0}>
                          <ul className="feeds">
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-info">
                                      <i className="fa fa-check" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc"> You have 4 pending tasks.
                                      <span className="label label-sm label-warning "> Take action
                                        <i className="fa fa-share" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date"> Just now </div>
                              </div>
                            </li>
                            <li>
                              <a href="javascript:;">
                                <div className="col1">
                                  <div className="cont">
                                    <div className="cont-col1">
                                      <div className="label label-sm label-success">
                                        <i className="fa fa-bar-chart-o" />
                                      </div>
                                    </div>
                                    <div className="cont-col2">
                                      <div className="desc"> Finance Report for year 2013 has been released. </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col2">
                                  <div className="date"> 20 mins </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-danger">
                                      <i className="fa fa-user" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc"> You have 5 pending membership that requires a quick review. </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date"> 24 mins </div>
                              </div>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-info">
                                      <i className="fa fa-shopping-cart" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc"> New order received with
                                      <span className="label label-sm label-success"> Reference Number: DR23923 </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date"> 30 mins </div>
                              </div>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-success">
                                      <i className="fa fa-user" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc"> You have 5 pending membership that requires a quick review. </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date"> 24 mins </div>
                              </div>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-default">
                                      <i className="fa fa-bell-o" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc"> Web server hardware needs to be upgraded.
                                      <span className="label label-sm label-default "> Overdue </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date"> 2 hours </div>
                              </div>
                            </li>
                            <li>
                              <a href="javascript:;">
                                <div className="col1">
                                  <div className="cont">
                                    <div className="cont-col1">
                                      <div className="label label-sm label-default">
                                        <i className="fa fa-briefcase" />
                                      </div>
                                    </div>
                                    <div className="cont-col2">
                                      <div className="desc"> IPO Report for year 2013 has been released. </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col2">
                                  <div className="date"> 20 mins </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-info">
                                      <i className="fa fa-check" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc"> You have 4 pending tasks.
                                      <span className="label label-sm label-warning "> Take action
                                        <i className="fa fa-share" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date"> Just now </div>
                              </div>
                            </li>
                            <li>
                              <a href="javascript:;">
                                <div className="col1">
                                  <div className="cont">
                                    <div className="cont-col1">
                                      <div className="label label-sm label-danger">
                                        <i className="fa fa-bar-chart-o" />
                                      </div>
                                    </div>
                                    <div className="cont-col2">
                                      <div className="desc"> Finance Report for year 2013 has been released. </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col2">
                                  <div className="date"> 20 mins </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-default">
                                      <i className="fa fa-user" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc"> You have 5 pending membership that requires a quick review. </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date"> 24 mins </div>
                              </div>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-info">
                                      <i className="fa fa-shopping-cart" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc"> New order received with
                                      <span className="label label-sm label-success"> Reference Number: DR23923 </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date"> 30 mins </div>
                              </div>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-success">
                                      <i className="fa fa-user" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc"> You have 5 pending membership that requires a quick review. </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date"> 24 mins </div>
                              </div>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-warning">
                                      <i className="fa fa-bell-o" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc"> Web server hardware needs to be upgraded.
                                      <span className="label label-sm label-default "> Overdue </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date"> 2 hours </div>
                              </div>
                            </li>
                            <li>
                              <a href="javascript:;">
                                <div className="col1">
                                  <div className="cont">
                                    <div className="cont-col1">
                                      <div className="label label-sm label-info">
                                        <i className="fa fa-briefcase" />
                                      </div>
                                    </div>
                                    <div className="cont-col2">
                                      <div className="desc"> IPO Report for year 2013 has been released. </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col2">
                                  <div className="date"> 20 mins </div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="scroller-footer">
                          <div className="btn-arrow-link pull-right">
                            <a href="javascript:;">See All Records</a>
                            <i className="icon-arrow-right" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xs-12 col-sm-12">
                    <div className="portlet light tasks-widget bordered">
                      <div className="portlet-title">
                        <div className="caption">
                          <i className="icon-share font-dark hide" />
                          <span className="caption-subject font-dark bold uppercase">Tasks</span>
                          <span className="caption-helper">tasks summary...</span>
                        </div>
                        <div className="actions">
                          <div className="btn-group">
                            <a className="btn blue-oleo btn-circle btn-sm" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> More
                              <i className="fa fa-angle-down" />
                            </a>
                            <ul className="dropdown-menu pull-right">
                              <li>
                                <a href="javascript:;"> All Project </a>
                              </li>
                              <li className="divider"> </li>
                              <li>
                                <a href="javascript:;"> AirAsia </a>
                              </li>
                              <li>
                                <a href="javascript:;"> Cruise </a>
                              </li>
                              <li>
                                <a href="javascript:;"> HSBC </a>
                              </li>
                              <li className="divider"> </li>
                              <li>
                                <a href="javascript:;"> Pending
                                  <span className="badge badge-danger"> 4 </span>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:;"> Completed
                                  <span className="badge badge-success"> 12 </span>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:;"> Overdue
                                  <span className="badge badge-warning"> 9 </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="portlet-body">
                        <div className="task-content">
                          <div className="scroller" style={{height: 312}} data-always-visible={1} data-rail-visible1={1}>
                            {/* START TASK LIST */}
                            <ul className="task-list">
                              <li>
                                <div className="task-checkbox">
                                  <label className="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                    <input type="checkbox" className="checkboxes" defaultValue={1} />
                                    <span />
                                  </label>
                                </div>
                                <div className="task-title">
                                  <span className="task-title-sp"> Present 2013 Year IPO Statistics at Board Meeting </span>
                                  <span className="label label-sm label-success">Company</span>
                                  <span className="task-bell">
                                    <i className="fa fa-bell-o" />
                                  </span>
                                </div>
                                <div className="task-config">
                                  <div className="task-config-btn btn-group">
                                    <a className="btn btn-sm default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                      <i className="fa fa-cog" />
                                      <i className="fa fa-angle-down" />
                                    </a>
                                    <ul className="dropdown-menu pull-right">
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-check" /> Complete </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-pencil" /> Edit </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-trash-o" /> Cancel </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="task-checkbox">
                                  <label className="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                    <input type="checkbox" className="checkboxes" defaultValue={1} />
                                    <span />
                                  </label>
                                </div>
                                <div className="task-title">
                                  <span className="task-title-sp"> Hold An Interview for Marketing Manager Position </span>
                                  <span className="label label-sm label-danger">Marketing</span>
                                </div>
                                <div className="task-config">
                                  <div className="task-config-btn btn-group">
                                    <a className="btn btn-sm default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                      <i className="fa fa-cog" />
                                      <i className="fa fa-angle-down" />
                                    </a>
                                    <ul className="dropdown-menu pull-right">
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-check" /> Complete </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-pencil" /> Edit </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-trash-o" /> Cancel </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="task-checkbox">
                                  <label className="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                    <input type="checkbox" className="checkboxes" defaultValue={1} />
                                    <span />
                                  </label>
                                </div>
                                <div className="task-title">
                                  <span className="task-title-sp"> AirAsia Intranet System Project Internal Meeting </span>
                                  <span className="label label-sm label-success">AirAsia</span>
                                  <span className="task-bell">
                                    <i className="fa fa-bell-o" />
                                  </span>
                                </div>
                                <div className="task-config">
                                  <div className="task-config-btn btn-group">
                                    <a className="btn btn-sm default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                      <i className="fa fa-cog" />
                                      <i className="fa fa-angle-down" />
                                    </a>
                                    <ul className="dropdown-menu pull-right">
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-check" /> Complete </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-pencil" /> Edit </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-trash-o" /> Cancel </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="task-checkbox">
                                  <label className="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                    <input type="checkbox" className="checkboxes" defaultValue={1} />
                                    <span />
                                  </label>
                                </div>
                                <div className="task-title">
                                  <span className="task-title-sp"> Technical Management Meeting </span>
                                  <span className="label label-sm label-warning">Company</span>
                                </div>
                                <div className="task-config">
                                  <div className="task-config-btn btn-group">
                                    <a className="btn btn-sm default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                      <i className="fa fa-cog" />
                                      <i className="fa fa-angle-down" />
                                    </a>
                                    <ul className="dropdown-menu pull-right">
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-check" /> Complete </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-pencil" /> Edit </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-trash-o" /> Cancel </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="task-checkbox">
                                  <label className="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                    <input type="checkbox" className="checkboxes" defaultValue={1} />
                                    <span />
                                  </label>
                                </div>
                                <div className="task-title">
                                  <span className="task-title-sp"> Kick-off Company CRM Mobile App Development </span>
                                  <span className="label label-sm label-info">Internal Products</span>
                                </div>
                                <div className="task-config">
                                  <div className="task-config-btn btn-group">
                                    <a className="btn btn-sm default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                      <i className="fa fa-cog" />
                                      <i className="fa fa-angle-down" />
                                    </a>
                                    <ul className="dropdown-menu pull-right">
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-check" /> Complete </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-pencil" /> Edit </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-trash-o" /> Cancel </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="task-checkbox">
                                  <label className="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                    <input type="checkbox" className="checkboxes" defaultValue={1} />
                                    <span />
                                  </label>
                                </div>
                                <div className="task-title">
                                  <span className="task-title-sp"> Prepare Commercial Offer For SmartVision Website Rewamp </span>
                                  <span className="label label-sm label-danger">SmartVision</span>
                                </div>
                                <div className="task-config">
                                  <div className="task-config-btn btn-group">
                                    <a className="btn btn-sm default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                      <i className="fa fa-cog" />
                                      <i className="fa fa-angle-down" />
                                    </a>
                                    <ul className="dropdown-menu pull-right">
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-check" /> Complete </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-pencil" /> Edit </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-trash-o" /> Cancel </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="task-checkbox">
                                  <label className="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                    <input type="checkbox" className="checkboxes" defaultValue={1} />
                                    <span />
                                  </label>
                                </div>
                                <div className="task-title">
                                  <span className="task-title-sp"> Sign-Off The Comercial Agreement With AutoSmart </span>
                                  <span className="label label-sm label-default">AutoSmart</span>
                                  <span className="task-bell">
                                    <i className="fa fa-bell-o" />
                                  </span>
                                </div>
                                <div className="task-config">
                                  <div className="task-config-btn btn-group dropup">
                                    <a className="btn btn-sm default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                      <i className="fa fa-cog" />
                                      <i className="fa fa-angle-down" />
                                    </a>
                                    <ul className="dropdown-menu pull-right">
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-check" /> Complete </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-pencil" /> Edit </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-trash-o" /> Cancel </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="task-checkbox">
                                  <label className="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                    <input type="checkbox" className="checkboxes" defaultValue={1} />
                                    <span />
                                  </label>
                                </div>
                                <div className="task-title">
                                  <span className="task-title-sp"> Company Staff Meeting </span>
                                  <span className="label label-sm label-success">Cruise</span>
                                  <span className="task-bell">
                                    <i className="fa fa-bell-o" />
                                  </span>
                                </div>
                                <div className="task-config">
                                  <div className="task-config-btn btn-group dropup">
                                    <a className="btn btn-sm default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                      <i className="fa fa-cog" />
                                      <i className="fa fa-angle-down" />
                                    </a>
                                    <ul className="dropdown-menu pull-right">
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-check" /> Complete </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-pencil" /> Edit </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-trash-o" /> Cancel </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li className="last-line">
                                <div className="task-checkbox">
                                  <label className="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                    <input type="checkbox" className="checkboxes" defaultValue={1} />
                                    <span />
                                  </label>
                                </div>
                                <div className="task-title">
                                  <span className="task-title-sp"> KeenThemes Investment Discussion </span>
                                  <span className="label label-sm label-warning">KeenThemes </span>
                                </div>
                                <div className="task-config">
                                  <div className="task-config-btn btn-group dropup">
                                    <a className="btn btn-sm default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                      <i className="fa fa-cog" />
                                      <i className="fa fa-angle-down" />
                                    </a>
                                    <ul className="dropdown-menu pull-right">
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-check" /> Complete </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-pencil" /> Edit </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">
                                          <i className="fa fa-trash-o" /> Cancel </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                            {/* END START TASK LIST */}
                          </div>
                        </div>
                        <div className="task-footer">
                          <div className="btn-arrow-link pull-right">
                            <a href="javascript:;">See All Records</a>
                            <i className="icon-arrow-right" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-xs-12 col-sm-12">
                    <div className="portlet light bordered">
                      <div className="portlet-title">
                        <div className="caption">
                          <i className="icon-cursor font-dark hide" />
                          <span className="caption-subject font-dark bold uppercase">General Stats</span>
                        </div>
                        <div className="actions">
                          <a href="javascript:;" className="btn btn-sm btn-circle red easy-pie-chart-reload">
                            <i className="fa fa-repeat" /> Reload </a>
                        </div>
                      </div>
                      <div className="portlet-body">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="easy-pie-chart">
                              <div className="number transactions" data-percent={55}>
                                <span>+55</span>% </div>
                              <a className="title" href="javascript:;"> Transactions
                                <i className="icon-arrow-right" />
                              </a>
                            </div>
                          </div>
                          <div className="margin-bottom-10 visible-sm"> </div>
                          <div className="col-md-4">
                            <div className="easy-pie-chart">
                              <div className="number visits" data-percent={85}>
                                <span>+85</span>% </div>
                              <a className="title" href="javascript:;"> New Visits
                                <i className="icon-arrow-right" />
                              </a>
                            </div>
                          </div>
                          <div className="margin-bottom-10 visible-sm"> </div>
                          <div className="col-md-4">
                            <div className="easy-pie-chart">
                              <div className="number bounce" data-percent={46}>
                                <span>-46</span>% </div>
                              <a className="title" href="javascript:;"> Bounce
                                <i className="icon-arrow-right" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xs-12 col-sm-12">
                    <div className="portlet light bordered">
                      <div className="portlet-title">
                        <div className="caption">
                          <i className="icon-equalizer font-dark hide" />
                          <span className="caption-subject font-dark bold uppercase">Server Stats</span>
                          <span className="caption-helper">monthly stats...</span>
                        </div>
                        <div className="tools">
                          <a href className="collapse"> </a>
                          <a href="#portlet-config" data-toggle="modal" className="config"> </a>
                          <a href className="reload"> </a>
                          <a href className="remove"> </a>
                        </div>
                      </div>
                      <div className="portlet-body">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="sparkline-chart">
                              <div className="number" id="sparkline_bar5" />
                              <a className="title" href="javascript:;"> Network
                                <i className="icon-arrow-right" />
                              </a>
                            </div>
                          </div>
                          <div className="margin-bottom-10 visible-sm"> </div>
                          <div className="col-md-4">
                            <div className="sparkline-chart">
                              <div className="number" id="sparkline_bar6" />
                              <a className="title" href="javascript:;"> CPU Load
                                <i className="icon-arrow-right" />
                              </a>
                            </div>
                          </div>
                          <div className="margin-bottom-10 visible-sm"> </div>
                          <div className="col-md-4">
                            <div className="sparkline-chart">
                              <div className="number" id="sparkline_line" />
                              <a className="title" href="javascript:;"> Load Rate
                                <i className="icon-arrow-right" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-xs-12 col-sm-12">
                    {/* BEGIN REGIONAL STATS PORTLET*/}
                    <div className="portlet light bordered">
                      <div className="portlet-title">
                        <div className="caption">
                          <i className="icon-share font-dark hide" />
                          <span className="caption-subject font-dark bold uppercase">Regional Stats</span>
                        </div>
                        <div className="actions">
                          <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                            <i className="icon-cloud-upload" />
                          </a>
                          <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                            <i className="icon-wrench" />
                          </a>
                          <a className="btn btn-circle btn-icon-only btn-default fullscreen" data-container="false" data-placement="bottom" href="javascript:;"> </a>
                          <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                            <i className="icon-trash" />
                          </a>
                        </div>
                      </div>
                      <div className="portlet-body">
                        <div id="region_statistics_loading">
                          <img src="styles/global/img/loading.gif" alt="loading" /> </div>
                        <div id="region_statistics_content" className="display-none">
                          <div className="btn-toolbar margin-bottom-10">
                            <div className="btn-group btn-group-circle" data-toggle="buttons">
                              <a href className="btn grey-salsa btn-sm active"> Users </a>
                              <a href className="btn grey-salsa btn-sm"> Orders </a>
                            </div>
                            <div className="btn-group pull-right">
                              <a href className="btn btn-circle grey-salsa btn-sm dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> Select Region
                                <span className="fa fa-angle-down"> </span>
                              </a>
                              <ul className="dropdown-menu pull-right">
                                <li>
                                  <a href="javascript:;" id="regional_stat_world"> World </a>
                                </li>
                                <li>
                                  <a href="javascript:;" id="regional_stat_usa"> USA </a>
                                </li>
                                <li>
                                  <a href="javascript:;" id="regional_stat_europe"> Europe </a>
                                </li>
                                <li>
                                  <a href="javascript:;" id="regional_stat_russia"> Russia </a>
                                </li>
                                <li>
                                  <a href="javascript:;" id="regional_stat_germany"> Germany </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div id="vmap_world" className="vmaps display-none"> </div>
                          <div id="vmap_usa" className="vmaps display-none"> </div>
                          <div id="vmap_europe" className="vmaps display-none"> </div>
                          <div id="vmap_russia" className="vmaps display-none"> </div>
                          <div id="vmap_germany" className="vmaps display-none"> </div>
                        </div>
                      </div>
                    </div>
                    {/* END REGIONAL STATS PORTLET*/}
                  </div>
                  <div className="col-lg-6 col-xs-12 col-sm-12">
                    {/* BEGIN PORTLET*/}
                    <div className="portlet light bordered">
                      <div className="portlet-title tabbable-line">
                        <div className="caption">
                          <i className="icon-globe font-dark hide" />
                          <span className="caption-subject font-dark bold uppercase">Feeds</span>
                        </div>
                        <ul className="nav nav-tabs">
                          <li className="active">
                            <a href="#tab_1_1" className="active" data-toggle="tab"> System </a>
                          </li>
                          <li>
                            <a href="#tab_1_2" data-toggle="tab"> Activities </a>
                          </li>
                        </ul>
                      </div>
                      <div className="portlet-body">
                        {/*BEGIN TABS*/}
                        <div className="tab-content">
                          <div className="tab-pane active" id="tab_1_1">
                            <div className="scroller" style={{height: 339}} data-always-visible={1} data-rail-visible={0}>
                              <ul className="feeds">
                                <li>
                                  <div className="col1">
                                    <div className="cont">
                                      <div className="cont-col1">
                                        <div className="label label-sm label-success">
                                          <i className="fa fa-bell-o" />
                                        </div>
                                      </div>
                                      <div className="cont-col2">
                                        <div className="desc"> You have 4 pending tasks.
                                          <span className="label label-sm label-info"> Take action
                                            <i className="fa fa-share" />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col2">
                                    <div className="date"> Just now </div>
                                  </div>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <div className="col1">
                                      <div className="cont">
                                        <div className="cont-col1">
                                          <div className="label label-sm label-success">
                                            <i className="fa fa-bell-o" />
                                          </div>
                                        </div>
                                        <div className="cont-col2">
                                          <div className="desc"> New version v1.4 just lunched! </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col2">
                                      <div className="date"> 20 mins </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <div className="col1">
                                    <div className="cont">
                                      <div className="cont-col1">
                                        <div className="label label-sm label-danger">
                                          <i className="fa fa-bolt" />
                                        </div>
                                      </div>
                                      <div className="cont-col2">
                                        <div className="desc"> Database server #12 overloaded. Please fix the issue. </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col2">
                                    <div className="date"> 24 mins </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="col1">
                                    <div className="cont">
                                      <div className="cont-col1">
                                        <div className="label label-sm label-info">
                                          <i className="fa fa-bullhorn" />
                                        </div>
                                      </div>
                                      <div className="cont-col2">
                                        <div className="desc"> New order received. Please take care of it. </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col2">
                                    <div className="date"> 30 mins </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="col1">
                                    <div className="cont">
                                      <div className="cont-col1">
                                        <div className="label label-sm label-success">
                                          <i className="fa fa-bullhorn" />
                                        </div>
                                      </div>
                                      <div className="cont-col2">
                                        <div className="desc"> New order received. Please take care of it. </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col2">
                                    <div className="date"> 40 mins </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="col1">
                                    <div className="cont">
                                      <div className="cont-col1">
                                        <div className="label label-sm label-warning">
                                          <i className="fa fa-plus" />
                                        </div>
                                      </div>
                                      <div className="cont-col2">
                                        <div className="desc"> New user registered. </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col2">
                                    <div className="date"> 1.5 hours </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="col1">
                                    <div className="cont">
                                      <div className="cont-col1">
                                        <div className="label label-sm label-success">
                                          <i className="fa fa-bell-o" />
                                        </div>
                                      </div>
                                      <div className="cont-col2">
                                        <div className="desc"> Web server hardware needs to be upgraded.
                                          <span className="label label-sm label-default "> Overdue </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col2">
                                    <div className="date"> 2 hours </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="col1">
                                    <div className="cont">
                                      <div className="cont-col1">
                                        <div className="label label-sm label-default">
                                          <i className="fa fa-bullhorn" />
                                        </div>
                                      </div>
                                      <div className="cont-col2">
                                        <div className="desc"> New order received. Please take care of it. </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col2">
                                    <div className="date"> 3 hours </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="col1">
                                    <div className="cont">
                                      <div className="cont-col1">
                                        <div className="label label-sm label-warning">
                                          <i className="fa fa-bullhorn" />
                                        </div>
                                      </div>
                                      <div className="cont-col2">
                                        <div className="desc"> New order received. Please take care of it. </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col2">
                                    <div className="date"> 5 hours </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="col1">
                                    <div className="cont">
                                      <div className="cont-col1">
                                        <div className="label label-sm label-info">
                                          <i className="fa fa-bullhorn" />
                                        </div>
                                      </div>
                                      <div className="cont-col2">
                                        <div className="desc"> New order received. Please take care of it. </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col2">
                                    <div className="date"> 18 hours </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="col1">
                                    <div className="cont">
                                      <div className="cont-col1">
                                        <div className="label label-sm label-default">
                                          <i className="fa fa-bullhorn" />
                                        </div>
                                      </div>
                                      <div className="cont-col2">
                                        <div className="desc"> New order received. Please take care of it. </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col2">
                                    <div className="date"> 21 hours </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="col1">
                                    <div className="cont">
                                      <div className="cont-col1">
                                        <div className="label label-sm label-info">
                                          <i className="fa fa-bullhorn" />
                                        </div>
                                      </div>
                                      <div className="cont-col2">
                                        <div className="desc"> New order received. Please take care of it. </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col2">
                                    <div className="date"> 22 hours </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="col1">
                                    <div className="cont">
                                      <div className="cont-col1">
                                        <div className="label label-sm label-default">
                                          <i className="fa fa-bullhorn" />
                                        </div>
                                      </div>
                                      <div className="cont-col2">
                                        <div className="desc"> New order received. Please take care of it. </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col2">
                                    <div className="date"> 21 hours </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="col1">
                                    <div className="cont">
                                      <div className="cont-col1">
                                        <div className="label label-sm label-info">
                                          <i className="fa fa-bullhorn" />
                                        </div>
                                      </div>
                                      <div className="cont-col2">
                                        <div className="desc"> New order received. Please take care of it. </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col2">
                                    <div className="date"> 22 hours </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="col1">
                                    <div className="cont">
                                      <div className="cont-col1">
                                        <div className="label label-sm label-default">
                                          <i className="fa fa-bullhorn" />
                                        </div>
                                      </div>
                                      <div className="cont-col2">
                                        <div className="desc"> New order received. Please take care of it. </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col2">
                                    <div className="date"> 21 hours </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="col1">
                                    <div className="cont">
                                      <div className="cont-col1">
                                        <div className="label label-sm label-info">
                                          <i className="fa fa-bullhorn" />
                                        </div>
                                      </div>
                                      <div className="cont-col2">
                                        <div className="desc"> New order received. Please take care of it. </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col2">
                                    <div className="date"> 22 hours </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="col1">
                                    <div className="cont">
                                      <div className="cont-col1">
                                        <div className="label label-sm label-default">
                                          <i className="fa fa-bullhorn" />
                                        </div>
                                      </div>
                                      <div className="cont-col2">
                                        <div className="desc"> New order received. Please take care of it. </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col2">
                                    <div className="date"> 21 hours </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="col1">
                                    <div className="cont">
                                      <div className="cont-col1">
                                        <div className="label label-sm label-info">
                                          <i className="fa fa-bullhorn" />
                                        </div>
                                      </div>
                                      <div className="cont-col2">
                                        <div className="desc"> New order received. Please take care of it. </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col2">
                                    <div className="date"> 22 hours </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="tab-pane" id="tab_1_2">
                            <div className="scroller" style={{height: 290}} data-always-visible={1} data-rail-visible1={1}>
                              <ul className="feeds">
                                <li>
                                  <a href="javascript:;">
                                    <div className="col1">
                                      <div className="cont">
                                        <div className="cont-col1">
                                          <div className="label label-sm label-success">
                                            <i className="fa fa-bell-o" />
                                          </div>
                                        </div>
                                        <div className="cont-col2">
                                          <div className="desc"> New user registered </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col2">
                                      <div className="date"> Just now </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <div className="col1">
                                      <div className="cont">
                                        <div className="cont-col1">
                                          <div className="label label-sm label-success">
                                            <i className="fa fa-bell-o" />
                                          </div>
                                        </div>
                                        <div className="cont-col2">
                                          <div className="desc"> New order received </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col2">
                                      <div className="date"> 10 mins </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <div className="col1">
                                    <div className="cont">
                                      <div className="cont-col1">
                                        <div className="label label-sm label-danger">
                                          <i className="fa fa-bolt" />
                                        </div>
                                      </div>
                                      <div className="cont-col2">
                                        <div className="desc"> Order #24DOP4 has been rejected.
                                          <span className="label label-sm label-danger "> Take action
                                            <i className="fa fa-share" />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col2">
                                    <div className="date"> 24 mins </div>
                                  </div>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <div className="col1">
                                      <div className="cont">
                                        <div className="cont-col1">
                                          <div className="label label-sm label-success">
                                            <i className="fa fa-bell-o" />
                                          </div>
                                        </div>
                                        <div className="cont-col2">
                                          <div className="desc"> New user registered </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col2">
                                      <div className="date"> Just now </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <div className="col1">
                                      <div className="cont">
                                        <div className="cont-col1">
                                          <div className="label label-sm label-success">
                                            <i className="fa fa-bell-o" />
                                          </div>
                                        </div>
                                        <div className="cont-col2">
                                          <div className="desc"> New user registered </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col2">
                                      <div className="date"> Just now </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <div className="col1">
                                      <div className="cont">
                                        <div className="cont-col1">
                                          <div className="label label-sm label-success">
                                            <i className="fa fa-bell-o" />
                                          </div>
                                        </div>
                                        <div className="cont-col2">
                                          <div className="desc"> New user registered </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col2">
                                      <div className="date"> Just now </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <div className="col1">
                                      <div className="cont">
                                        <div className="cont-col1">
                                          <div className="label label-sm label-success">
                                            <i className="fa fa-bell-o" />
                                          </div>
                                        </div>
                                        <div className="cont-col2">
                                          <div className="desc"> New user registered </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col2">
                                      <div className="date"> Just now </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <div className="col1">
                                      <div className="cont">
                                        <div className="cont-col1">
                                          <div className="label label-sm label-success">
                                            <i className="fa fa-bell-o" />
                                          </div>
                                        </div>
                                        <div className="cont-col2">
                                          <div className="desc"> New user registered </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col2">
                                      <div className="date"> Just now </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <div className="col1">
                                      <div className="cont">
                                        <div className="cont-col1">
                                          <div className="label label-sm label-success">
                                            <i className="fa fa-bell-o" />
                                          </div>
                                        </div>
                                        <div className="cont-col2">
                                          <div className="desc"> New user registered </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col2">
                                      <div className="date"> Just now </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <div className="col1">
                                      <div className="cont">
                                        <div className="cont-col1">
                                          <div className="label label-sm label-success">
                                            <i className="fa fa-bell-o" />
                                          </div>
                                        </div>
                                        <div className="cont-col2">
                                          <div className="desc"> New user registered </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col2">
                                      <div className="date"> Just now </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/*END TABS*/}
                      </div>
                    </div>
                    {/* END PORTLET*/}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-xs-12 col-sm-12">
                    {/* BEGIN PORTLET*/}
                    <div className="portlet light calendar bordered">
                      <div className="portlet-title ">
                        <div className="caption">
                          <i className="icon-calendar font-dark hide" />
                          <span className="caption-subject font-dark bold uppercase">Feeds</span>
                        </div>
                      </div>
                      <div className="portlet-body">
                        <div id="calendar"> </div>
                      </div>
                    </div>
                    {/* END PORTLET*/}
                  </div>
                  <div className="col-lg-6 col-xs-12 col-sm-12">
                    {/* BEGIN PORTLET*/}
                    <div className="portlet light bordered">
                      <div className="portlet-title">
                        <div className="caption">
                          <i className="icon-bubble font-hide hide" />
                          <span className="caption-subject font-hide bold uppercase">Chats</span>
                        </div>
                        <div className="actions">
                          <div className="portlet-input input-inline">
                            <div className="input-icon right">
                              <i className="icon-magnifier" />
                              <input type="text" className="form-control input-circle" placeholder="search..." /> </div>
                          </div>
                        </div>
                      </div>
                      <div className="portlet-body" id="chats">
                        <div className="scroller" style={{height: 525}} data-always-visible={1} data-rail-visible1={1}>
                          <ul className="chats">
                            <li className="out">
                              <img className="avatar" alt src="styles/layouts/layout/img/avatar2.jpg" />
                              <div className="message">
                                <span className="arrow"> </span>
                                <a href="javascript:;" className="name"> Lisa Wong </a>
                                <span className="datetime"> at 20:11 </span>
                                <span className="body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </span>
                              </div>
                            </li>
                            <li className="out">
                              <img className="avatar" alt src="styles/layouts/layout/img/avatar2.jpg" />
                              <div className="message">
                                <span className="arrow"> </span>
                                <a href="javascript:;" className="name"> Lisa Wong </a>
                                <span className="datetime"> at 20:11 </span>
                                <span className="body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </span>
                              </div>
                            </li>
                            <li className="in">
                              <img className="avatar" alt src="styles/layouts/layout/img/avatar1.jpg" />
                              <div className="message">
                                <span className="arrow"> </span>
                                <a href="javascript:;" className="name"> Bob Nilson </a>
                                <span className="datetime"> at 20:30 </span>
                                <span className="body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </span>
                              </div>
                            </li>
                            <li className="in">
                              <img className="avatar" alt src="styles/layouts/layout/img/avatar1.jpg" />
                              <div className="message">
                                <span className="arrow"> </span>
                                <a href="javascript:;" className="name"> Bob Nilson </a>
                                <span className="datetime"> at 20:30 </span>
                                <span className="body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </span>
                              </div>
                            </li>
                            <li className="out">
                              <img className="avatar" alt src="styles/layouts/layout/img/avatar3.jpg" />
                              <div className="message">
                                <span className="arrow"> </span>
                                <a href="javascript:;" className="name"> Richard Doe </a>
                                <span className="datetime"> at 20:33 </span>
                                <span className="body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </span>
                              </div>
                            </li>
                            <li className="in">
                              <img className="avatar" alt src="styles/layouts/layout/img/avatar3.jpg" />
                              <div className="message">
                                <span className="arrow"> </span>
                                <a href="javascript:;" className="name"> Richard Doe </a>
                                <span className="datetime"> at 20:35 </span>
                                <span className="body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </span>
                              </div>
                            </li>
                            <li className="out">
                              <img className="avatar" alt src="styles/layouts/layout/img/avatar1.jpg" />
                              <div className="message">
                                <span className="arrow"> </span>
                                <a href="javascript:;" className="name"> Bob Nilson </a>
                                <span className="datetime"> at 20:40 </span>
                                <span className="body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </span>
                              </div>
                            </li>
                            <li className="in">
                              <img className="avatar" alt src="styles/layouts/layout/img/avatar3.jpg" />
                              <div className="message">
                                <span className="arrow"> </span>
                                <a href="javascript:;" className="name"> Richard Doe </a>
                                <span className="datetime"> at 20:40 </span>
                                <span className="body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </span>
                              </div>
                            </li>
                            <li className="out">
                              <img className="avatar" alt src="styles/layouts/layout/img/avatar1.jpg" />
                              <div className="message">
                                <span className="arrow"> </span>
                                <a href="javascript:;" className="name"> Bob Nilson </a>
                                <span className="datetime"> at 20:54 </span>
                                <span className="body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. sed diam nonummy nibh euismod tincidunt ut laoreet.
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="chat-form">
                          <div className="input-cont">
                            <input className="form-control" type="text" placeholder="Type a message here..." /> </div>
                          <div className="btn-cont">
                            <span className="arrow"> </span>
                            <a href className="btn blue icn-only">
                              <i className="fa fa-check icon-white" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* END PORTLET*/}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-xs-12 col-sm-12">
                    <div className="portlet light bordered">
                      <div className="portlet-title">
                        <div className="caption">
                          <i className="icon-bubble font-dark hide" />
                          <span className="caption-subject font-hide bold uppercase">Recent Users</span>
                        </div>
                        <div className="actions">
                          <div className="btn-group">
                            <a className="btn green-haze btn-outline btn-circle btn-sm" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> Actions
                              <i className="fa fa-angle-down" />
                            </a>
                            <ul className="dropdown-menu pull-right">
                              <li>
                                <a href="javascript:;"> Option 1</a>
                              </li>
                              <li className="divider"> </li>
                              <li>
                                <a href="javascript:;">Option 2</a>
                              </li>
                              <li>
                                <a href="javascript:;">Option 3</a>
                              </li>
                              <li>
                                <a href="javascript:;">Option 4</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="portlet-body">
                        <div className="row">
                          <div className="col-md-4">
                            {/*begin: widget 1-1 */}
                            <div className="mt-widget-1">
                              <div className="mt-icon">
                                <a href="#">
                                  <i className="icon-plus" />
                                </a>
                              </div>
                              <div className="mt-img">
                                <img src="styles/pages/media/users/avatar80_8.jpg" /> </div>
                              <div className="mt-body">
                                <h3 className="mt-username">Diana Ellison</h3>
                                <p className="mt-user-title"> Lorem Ipsum is simply dummy text. </p>
                                <div className="mt-stats">
                                  <div className="btn-group btn-group btn-group-justified">
                                    <a href="javascript:;" className="btn font-red">
                                      <i className="icon-bubbles" /> 1,7k </a>
                                    <a href="javascript:;" className="btn font-green">
                                      <i className="icon-social-twitter" /> 2,6k </a>
                                    <a href="javascript:;" className="btn font-yellow">
                                      <i className="icon-emoticon-smile" /> 3,7k </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*end: widget 1-1 */}
                          </div>
                          <div className="col-md-4">
                            {/*begin: widget 1-2 */}
                            <div className="mt-widget-1">
                              <div className="mt-icon">
                                <a href="#">
                                  <i className="icon-plus" />
                                </a>
                              </div>
                              <div className="mt-img">
                                <img src="styles/pages/media/users/avatar80_7.jpg" /> </div>
                              <div className="mt-body">
                                <h3 className="mt-username">Jason Baker</h3>
                                <p className="mt-user-title"> Lorem Ipsum is simply dummy text. </p>
                                <div className="mt-stats">
                                  <div className="btn-group btn-group btn-group-justified">
                                    <a href="javascript:;" className="btn font-yellow">
                                      <i className="icon-bubbles" /> 1,7k </a>
                                    <a href="javascript:;" className="btn font-blue">
                                      <i className="icon-social-twitter" /> 2,6k </a>
                                    <a href="javascript:;" className="btn font-green">
                                      <i className="icon-emoticon-smile" /> 3,7k </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*end: widget 1-2 */}
                          </div>
                          <div className="col-md-4">
                            {/*begin: widget 1-3 */}
                            <div className="mt-widget-1">
                              <div className="mt-icon">
                                <a href="#">
                                  <i className="icon-plus" />
                                </a>
                              </div>
                              <div className="mt-img">
                                <img src="styles/pages/media/users/avatar80_6.jpg" /> </div>
                              <div className="mt-body">
                                <h3 className="mt-username">Julia Berry</h3>
                                <p className="mt-user-title"> Lorem Ipsum is simply dummy text. </p>
                                <div className="mt-stats">
                                  <div className="btn-group btn-group btn-group-justified">
                                    <a href="javascript:;" className="btn font-yellow">
                                      <i className="icon-bubbles" /> 1,7k </a>
                                    <a href="javascript:;" className="btn font-red">
                                      <i className="icon-social-twitter" /> 2,6k </a>
                                    <a href="javascript:;" className="btn font-green">
                                      <i className="icon-emoticon-smile" /> 3,7k </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*end: widget 1-3 */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="portlet light portlet-fit bordered">
                      <div className="portlet-title">
                        <div className="caption">
                          <i className="icon-microphone font-dark hide" />
                          <span className="caption-subject bold font-dark uppercase"> Recent Works</span>
                          <span className="caption-helper">default option...</span>
                        </div>
                        <div className="actions">
                          <div className="btn-group btn-group-devided" data-toggle="buttons">
                            <label className="btn red btn-outline btn-circle btn-sm active">
                              <input type="radio" name="options" className="toggle" id="option1" />Settings</label>
                            <label className="btn  red btn-outline btn-circle btn-sm">
                              <input type="radio" name="options" className="toggle" id="option2" />Tools</label>
                          </div>
                        </div>
                      </div>
                      <div className="portlet-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mt-widget-2">
                              <div className="mt-head" style={{backgroundImage: 'url(styles/pages/img/background/32.jpg)'}}>
                                <div className="mt-head-label">
                                  <button type="button" className="btn btn-success">Manhattan</button>
                                </div>
                                <div className="mt-head-user">
                                  <div className="mt-head-user-img">
                                    <img src="styles/pages/img/avatars/team7.jpg" /> </div>
                                  <div className="mt-head-user-info">
                                    <span className="mt-user-name">Chris Jagers</span>
                                    <span className="mt-user-time">
                                      <i className="icon-emoticon-smile" /> 3 mins ago </span>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-body">
                                <h3 className="mt-body-title"> Thomas Clark </h3>
                                <p className="mt-body-description"> It is a long established fact that a reader will be distracted </p>
                                <ul className="mt-body-stats">
                                  <li className="font-green">
                                    <i className="icon-emoticon-smile" /> 3,7k</li>
                                  <li className="font-yellow">
                                    <i className=" icon-social-twitter" /> 3,7k</li>
                                  <li className="font-red">
                                    <i className="  icon-bubbles" /> 3,7k</li>
                                </ul>
                                <div className="mt-body-actions">
                                  <div className="btn-group btn-group btn-group-justified">
                                    <a href="javascript:;" className="btn">
                                      <i className="icon-bubbles" /> Bookmark </a>
                                    <a href="javascript:;" className="btn ">
                                      <i className="icon-social-twitter" /> Share </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mt-widget-2">
                              <div className="mt-head" style={{backgroundImage: 'url(styles/pages/img/background/43.jpg)'}}>
                                <div className="mt-head-label">
                                  <button type="button" className="btn btn-danger">London</button>
                                </div>
                                <div className="mt-head-user">
                                  <div className="mt-head-user-img">
                                    <img src="styles/pages/img/avatars/team3.jpg" /> </div>
                                  <div className="mt-head-user-info">
                                    <span className="mt-user-name">Harry Harris</span>
                                    <span className="mt-user-time">
                                      <i className="icon-user" /> 3 mins ago </span>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-body">
                                <h3 className="mt-body-title"> Christian Davidson </h3>
                                <p className="mt-body-description"> It is a long established fact that a reader will be distracted </p>
                                <ul className="mt-body-stats">
                                  <li className="font-green">
                                    <i className="icon-emoticon-smile" /> 3,7k</li>
                                  <li className="font-yellow">
                                    <i className=" icon-social-twitter" /> 3,7k</li>
                                  <li className="font-red">
                                    <i className="  icon-bubbles" /> 3,7k</li>
                                </ul>
                                <div className="mt-body-actions">
                                  <div className="btn-group btn-group btn-group-justified">
                                    <a href="javascript:;" className="btn ">
                                      <i className="icon-bubbles" /> Bookmark </a>
                                    <a href="javascript:;" className="btn ">
                                      <i className="icon-social-twitter" /> Share </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xs-12 col-sm-12">
                    <div className="portlet light portlet-fit bordered">
                      <div className="portlet-title">
                        <div className="caption">
                          <i className="icon-microphone font-dark hide" />
                          <span className="caption-subject bold font-dark uppercase"> Recent Projects</span>
                          <span className="caption-helper">default option...</span>
                        </div>
                        <div className="actions">
                          <div className="btn-group btn-group-devided" data-toggle="buttons">
                            <label className="btn blue btn-outline btn-circle btn-sm active">
                              <input type="radio" name="options" className="toggle" id="option1" />Actions</label>
                            <label className="btn  blue btn-outline btn-circle btn-sm">
                              <input type="radio" name="options" className="toggle" id="option2" />Tools</label>
                          </div>
                        </div>
                      </div>
                      <div className="portlet-body">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="mt-widget-4">
                              <div className="mt-img-container">
                                <img src="styles/pages/img/background/34.jpg" /> </div>
                              <div className="mt-container bg-purple-opacity">
                                <div className="mt-head-title"> Website Revamp &amp; Deployment </div>
                                <div className="mt-body-icons">
                                  <a href="#">
                                    <i className=" icon-pencil" />
                                  </a>
                                  <a href="#">
                                    <i className=" icon-map" />
                                  </a>
                                  <a href="#">
                                    <i className=" icon-trash" />
                                  </a>
                                </div>
                                <div className="mt-footer-button">
                                  <button type="button" className="btn btn-circle btn-danger btn-sm">Dior</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mt-widget-4">
                              <div className="mt-img-container">
                                <img src="styles/pages/img/background/46.jpg" /> </div>
                              <div className="mt-container bg-green-opacity">
                                <div className="mt-head-title"> CRM Development &amp; Deployment </div>
                                <div className="mt-body-icons">
                                  <a href="#">
                                    <i className=" icon-social-twitter" />
                                  </a>
                                  <a href="#">
                                    <i className=" icon-bubbles" />
                                  </a>
                                  <a href="#">
                                    <i className=" icon-bell" />
                                  </a>
                                </div>
                                <div className="mt-footer-button">
                                  <button type="button" className="btn btn-circle blue-ebonyclay btn-sm">Nike</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mt-widget-4">
                              <div className="mt-img-container">
                                <img src="styles/pages/img/background/37.jpg" /> </div>
                              <div className="mt-container bg-dark-opacity">
                                <div className="mt-head-title"> Marketing Campaigns </div>
                                <div className="mt-body-icons">
                                  <a href="#">
                                    <i className=" icon-bubbles" />
                                  </a>
                                  <a href="#">
                                    <i className=" icon-map" />
                                  </a>
                                  <a href="#">
                                    <i className=" icon-cup" />
                                  </a>
                                </div>
                                <div className="mt-footer-button">
                                  <button type="button" className="btn btn-circle btn-success btn-sm">Honda</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="portlet light portlet-fit bordered">
                      <div className="portlet-title">
                        <div className="caption">
                          <i className="icon-microphone font-dark hide" />
                          <span className="caption-subject bold font-dark uppercase"> Activities</span>
                          <span className="caption-helper">default option...</span>
                        </div>
                        <div className="actions">
                          <div className="btn-group">
                            <a className="btn red btn-outline btn-circle btn-sm" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> Actions
                              <i className="fa fa-angle-down" />
                            </a>
                            <ul className="dropdown-menu pull-right">
                              <li>
                                <a href="javascript:;"> Option 1</a>
                              </li>
                              <li className="divider"> </li>
                              <li>
                                <a href="javascript:;">Option 2</a>
                              </li>
                              <li>
                                <a href="javascript:;">Option 3</a>
                              </li>
                              <li>
                                <a href="javascript:;">Option 4</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="portlet-body">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="mt-widget-3">
                              <div className="mt-head bg-blue-hoki">
                                <div className="mt-head-icon">
                                  <i className=" icon-social-twitter" />
                                </div>
                                <div className="mt-head-desc"> Lorem Ipsum is simply dummy text of the ... </div>
                                <span className="mt-head-date"> 25 Jan, 2015 </span>
                                <div className="mt-head-button">
                                  <button type="button" className="btn btn-circle btn-outline white btn-sm">Add</button>
                                </div>
                              </div>
                              <div className="mt-body-actions-icons">
                                <div className="btn-group btn-group btn-group-justified">
                                  <a href="javascript:;" className="btn ">
                                    <span className="mt-icon">
                                      <i className="glyphicon glyphicon-align-justify" />
                                    </span>RECORD </a>
                                  <a href="javascript:;" className="btn ">
                                    <span className="mt-icon">
                                      <i className="glyphicon glyphicon-camera" />
                                    </span>PHOTO </a>
                                  <a href="javascript:;" className="btn ">
                                    <span className="mt-icon">
                                      <i className="glyphicon glyphicon-calendar" />
                                    </span>DATE </a>
                                  <a href="javascript:;" className="btn ">
                                    <span className="mt-icon">
                                      <i className="glyphicon glyphicon-record" />
                                    </span>RANC </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mt-widget-3">
                              <div className="mt-head bg-red">
                                <div className="mt-head-icon">
                                  <i className="icon-user" />
                                </div>
                                <div className="mt-head-desc"> Lorem Ipsum is simply dummy text of the ... </div>
                                <span className="mt-head-date"> 12 Feb, 2016 </span>
                                <div className="mt-head-button">
                                  <button type="button" className="btn btn-circle btn-outline white btn-sm">Add</button>
                                </div>
                              </div>
                              <div className="mt-body-actions-icons">
                                <div className="btn-group btn-group btn-group-justified">
                                  <a href="javascript:;" className="btn ">
                                    <span className="mt-icon">
                                      <i className="glyphicon glyphicon-align-justify" />
                                    </span>RECORD </a>
                                  <a href="javascript:;" className="btn ">
                                    <span className="mt-icon">
                                      <i className="glyphicon glyphicon-camera" />
                                    </span>PHOTO </a>
                                  <a href="javascript:;" className="btn ">
                                    <span className="mt-icon">
                                      <i className="glyphicon glyphicon-calendar" />
                                    </span>DATE </a>
                                  <a href="javascript:;" className="btn ">
                                    <span className="mt-icon">
                                      <i className="glyphicon glyphicon-record" />
                                    </span>RANC </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mt-widget-3">
                              <div className="mt-head bg-green">
                                <div className="mt-head-icon">
                                  <i className=" icon-graduation" />
                                </div>
                                <div className="mt-head-desc"> Lorem Ipsum is simply dummy text of the ... </div>
                                <span className="mt-head-date"> 3 Mar, 2015 </span>
                                <div className="mt-head-button">
                                  <button type="button" className="btn btn-circle btn-outline white btn-sm">Add</button>
                                </div>
                              </div>
                              <div className="mt-body-actions-icons">
                                <div className="btn-group btn-group btn-group-justified">
                                  <a href="javascript:;" className="btn ">
                                    <span className="mt-icon">
                                      <i className="glyphicon glyphicon-align-justify" />
                                    </span>RECORD </a>
                                  <a href="javascript:;" className="btn ">
                                    <span className="mt-icon">
                                      <i className="glyphicon glyphicon-camera" />
                                    </span>PHOTO </a>
                                  <a href="javascript:;" className="btn ">
                                    <span className="mt-icon">
                                      <i className="glyphicon glyphicon-calendar" />
                                    </span>DATE </a>
                                  <a href="javascript:;" className="btn ">
                                    <span className="mt-icon">
                                      <i className="glyphicon glyphicon-record" />
                                    </span>RANC </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END CONTENT BODY */}
            </div>
            {/* END CONTENT */}
            {/* BEGIN QUICK SIDEBAR */}
            <a href="javascript:;" className="page-quick-sidebar-toggler">
              <i className="icon-login" />
            </a>
            <div className="page-quick-sidebar-wrapper" data-close-on-body-click="false">
              <div className="page-quick-sidebar">
                <ul className="nav nav-tabs">
                  <li className="active">
                    <a href="javascript:;" data-target="#quick_sidebar_tab_1" data-toggle="tab"> Users
                      <span className="badge badge-danger">2</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" data-target="#quick_sidebar_tab_2" data-toggle="tab"> Alerts
                      <span className="badge badge-success">7</span>
                    </a>
                  </li>
                  <li className="dropdown">
                    <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown"> More
                      <i className="fa fa-angle-down" />
                    </a>
                    <ul className="dropdown-menu pull-right">
                      <li>
                        <a href="javascript:;" data-target="#quick_sidebar_tab_3" data-toggle="tab">
                          <i className="icon-bell" /> Alerts </a>
                      </li>
                      <li>
                        <a href="javascript:;" data-target="#quick_sidebar_tab_3" data-toggle="tab">
                          <i className="icon-info" /> Notifications </a>
                      </li>
                      <li>
                        <a href="javascript:;" data-target="#quick_sidebar_tab_3" data-toggle="tab">
                          <i className="icon-speech" /> Activities </a>
                      </li>
                      <li className="divider" />
                      <li>
                        <a href="javascript:;" data-target="#quick_sidebar_tab_3" data-toggle="tab">
                          <i className="icon-settings" /> Settings </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active page-quick-sidebar-chat" id="quick_sidebar_tab_1">
                    <div className="page-quick-sidebar-chat-users" data-rail-color="#ddd" data-wrapper-class="page-quick-sidebar-list">
                      <h3 className="list-heading">Staff</h3>
                      <ul className="media-list list-items">
                        <li className="media">
                          <div className="media-status">
                            <span className="badge badge-success">8</span>
                          </div>
                          <img className="media-object" src="styles/layouts/layout/img/avatar3.jpg" alt="..." />
                          <div className="media-body">
                            <h4 className="media-heading">Bob Nilson</h4>
                            <div className="media-heading-sub"> Project Manager </div>
                          </div>
                        </li>
                        <li className="media">
                          <img className="media-object" src="styles/layouts/layout/img/avatar1.jpg" alt="..." />
                          <div className="media-body">
                            <h4 className="media-heading">Nick Larson</h4>
                            <div className="media-heading-sub"> Art Director </div>
                          </div>
                        </li>
                        <li className="media">
                          <div className="media-status">
                            <span className="badge badge-danger">3</span>
                          </div>
                          <img className="media-object" src="styles/layouts/layout/img/avatar4.jpg" alt="..." />
                          <div className="media-body">
                            <h4 className="media-heading">Deon Hubert</h4>
                            <div className="media-heading-sub"> CTO </div>
                          </div>
                        </li>
                        <li className="media">
                          <img className="media-object" src="styles/layouts/layout/img/avatar2.jpg" alt="..." />
                          <div className="media-body">
                            <h4 className="media-heading">Ella Wong</h4>
                            <div className="media-heading-sub"> CEO </div>
                          </div>
                        </li>
                      </ul>
                      <h3 className="list-heading">Customers</h3>
                      <ul className="media-list list-items">
                        <li className="media">
                          <div className="media-status">
                            <span className="badge badge-warning">2</span>
                          </div>
                          <img className="media-object" src="styles/layouts/layout/img/avatar6.jpg" alt="..." />
                          <div className="media-body">
                            <h4 className="media-heading">Lara Kunis</h4>
                            <div className="media-heading-sub"> CEO, Loop Inc </div>
                            <div className="media-heading-small"> Last seen 03:10 AM </div>
                          </div>
                        </li>
                        <li className="media">
                          <div className="media-status">
                            <span className="label label-sm label-success">new</span>
                          </div>
                          <img className="media-object" src="styles/layouts/layout/img/avatar7.jpg" alt="..." />
                          <div className="media-body">
                            <h4 className="media-heading">Ernie Kyllonen</h4>
                            <div className="media-heading-sub"> Project Manager,
                              <br /> SmartBizz PTL </div>
                          </div>
                        </li>
                        <li className="media">
                          <img className="media-object" src="styles/layouts/layout/img/avatar8.jpg" alt="..." />
                          <div className="media-body">
                            <h4 className="media-heading">Lisa Stone</h4>
                            <div className="media-heading-sub"> CTO, Keort Inc </div>
                            <div className="media-heading-small"> Last seen 13:10 PM </div>
                          </div>
                        </li>
                        <li className="media">
                          <div className="media-status">
                            <span className="badge badge-success">7</span>
                          </div>
                          <img className="media-object" src="styles/layouts/layout/img/avatar9.jpg" alt="..." />
                          <div className="media-body">
                            <h4 className="media-heading">Deon Portalatin</h4>
                            <div className="media-heading-sub"> CFO, H&amp;D LTD </div>
                          </div>
                        </li>
                        <li className="media">
                          <img className="media-object" src="styles/layouts/layout/img/avatar10.jpg" alt="..." />
                          <div className="media-body">
                            <h4 className="media-heading">Irina Savikova</h4>
                            <div className="media-heading-sub"> CEO, Tizda Motors Inc </div>
                          </div>
                        </li>
                        <li className="media">
                          <div className="media-status">
                            <span className="badge badge-danger">4</span>
                          </div>
                          <img className="media-object" src="styles/layouts/layout/img/avatar11.jpg" alt="..." />
                          <div className="media-body">
                            <h4 className="media-heading">Maria Gomez</h4>
                            <div className="media-heading-sub"> Manager, Infomatic Inc </div>
                            <div className="media-heading-small"> Last seen 03:10 AM </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="page-quick-sidebar-item">
                      <div className="page-quick-sidebar-chat-user">
                        <div className="page-quick-sidebar-nav">
                          <a href="javascript:;" className="page-quick-sidebar-back-to-list">
                            <i className="icon-arrow-left" />Back</a>
                        </div>
                        <div className="page-quick-sidebar-chat-user-messages">
                          <div className="post out">
                            <img className="avatar" alt src="styles/layouts/layout/img/avatar3.jpg" />
                            <div className="message">
                              <span className="arrow" />
                              <a href="javascript:;" className="name">Bob Nilson</a>
                              <span className="datetime">20:15</span>
                              <span className="body"> When could you send me the report ? </span>
                            </div>
                          </div>
                          <div className="post in">
                            <img className="avatar" alt src="styles/layouts/layout/img/avatar2.jpg" />
                            <div className="message">
                              <span className="arrow" />
                              <a href="javascript:;" className="name">Ella Wong</a>
                              <span className="datetime">20:15</span>
                              <span className="body"> Its almost done. I will be sending it shortly </span>
                            </div>
                          </div>
                          <div className="post out">
                            <img className="avatar" alt src="styles/layouts/layout/img/avatar3.jpg" />
                            <div className="message">
                              <span className="arrow" />
                              <a href="javascript:;" className="name">Bob Nilson</a>
                              <span className="datetime">20:15</span>
                              <span className="body"> Alright. Thanks! :) </span>
                            </div>
                          </div>
                          <div className="post in">
                            <img className="avatar" alt src="styles/layouts/layout/img/avatar2.jpg" />
                            <div className="message">
                              <span className="arrow" />
                              <a href="javascript:;" className="name">Ella Wong</a>
                              <span className="datetime">20:16</span>
                              <span className="body"> You are most welcome. Sorry for the delay. </span>
                            </div>
                          </div>
                          <div className="post out">
                            <img className="avatar" alt src="styles/layouts/layout/img/avatar3.jpg" />
                            <div className="message">
                              <span className="arrow" />
                              <a href="javascript:;" className="name">Bob Nilson</a>
                              <span className="datetime">20:17</span>
                              <span className="body"> No probs. Just take your time :) </span>
                            </div>
                          </div>
                          <div className="post in">
                            <img className="avatar" alt src="styles/layouts/layout/img/avatar2.jpg" />
                            <div className="message">
                              <span className="arrow" />
                              <a href="javascript:;" className="name">Ella Wong</a>
                              <span className="datetime">20:40</span>
                              <span className="body"> Alright. I just emailed it to you. </span>
                            </div>
                          </div>
                          <div className="post out">
                            <img className="avatar" alt src="styles/layouts/layout/img/avatar3.jpg" />
                            <div className="message">
                              <span className="arrow" />
                              <a href="javascript:;" className="name">Bob Nilson</a>
                              <span className="datetime">20:17</span>
                              <span className="body"> Great! Thanks. Will check it right away. </span>
                            </div>
                          </div>
                          <div className="post in">
                            <img className="avatar" alt src="styles/layouts/layout/img/avatar2.jpg" />
                            <div className="message">
                              <span className="arrow" />
                              <a href="javascript:;" className="name">Ella Wong</a>
                              <span className="datetime">20:40</span>
                              <span className="body"> Please let me know if you have any comment. </span>
                            </div>
                          </div>
                          <div className="post out">
                            <img className="avatar" alt src="styles/layouts/layout/img/avatar3.jpg" />
                            <div className="message">
                              <span className="arrow" />
                              <a href="javascript:;" className="name">Bob Nilson</a>
                              <span className="datetime">20:17</span>
                              <span className="body"> Sure. I will check and buzz you if anything needs to be corrected. </span>
                            </div>
                          </div>
                        </div>
                        <div className="page-quick-sidebar-chat-user-form">
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="Type a message here..." />
                            <div className="input-group-btn">
                              <button type="button" className="btn green">
                                <i className="icon-paper-clip" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane page-quick-sidebar-alerts" id="quick_sidebar_tab_2">
                    <div className="page-quick-sidebar-alerts-list">
                      <h3 className="list-heading">General</h3>
                      <ul className="feeds list-items">
                        <li>
                          <div className="col1">
                            <div className="cont">
                              <div className="cont-col1">
                                <div className="label label-sm label-info">
                                  <i className="fa fa-check" />
                                </div>
                              </div>
                              <div className="cont-col2">
                                <div className="desc"> You have 4 pending tasks.
                                  <span className="label label-sm label-warning "> Take action
                                    <i className="fa fa-share" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col2">
                            <div className="date"> Just now </div>
                          </div>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <div className="col1">
                              <div className="cont">
                                <div className="cont-col1">
                                  <div className="label label-sm label-success">
                                    <i className="fa fa-bar-chart-o" />
                                  </div>
                                </div>
                                <div className="cont-col2">
                                  <div className="desc"> Finance Report for year 2013 has been released. </div>
                                </div>
                              </div>
                            </div>
                            <div className="col2">
                              <div className="date"> 20 mins </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <div className="col1">
                            <div className="cont">
                              <div className="cont-col1">
                                <div className="label label-sm label-danger">
                                  <i className="fa fa-user" />
                                </div>
                              </div>
                              <div className="cont-col2">
                                <div className="desc"> You have 5 pending membership that requires a quick review. </div>
                              </div>
                            </div>
                          </div>
                          <div className="col2">
                            <div className="date"> 24 mins </div>
                          </div>
                        </li>
                        <li>
                          <div className="col1">
                            <div className="cont">
                              <div className="cont-col1">
                                <div className="label label-sm label-info">
                                  <i className="fa fa-shopping-cart" />
                                </div>
                              </div>
                              <div className="cont-col2">
                                <div className="desc"> New order received with
                                  <span className="label label-sm label-success"> Reference Number: DR23923 </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col2">
                            <div className="date"> 30 mins </div>
                          </div>
                        </li>
                        <li>
                          <div className="col1">
                            <div className="cont">
                              <div className="cont-col1">
                                <div className="label label-sm label-success">
                                  <i className="fa fa-user" />
                                </div>
                              </div>
                              <div className="cont-col2">
                                <div className="desc"> You have 5 pending membership that requires a quick review. </div>
                              </div>
                            </div>
                          </div>
                          <div className="col2">
                            <div className="date"> 24 mins </div>
                          </div>
                        </li>
                        <li>
                          <div className="col1">
                            <div className="cont">
                              <div className="cont-col1">
                                <div className="label label-sm label-info">
                                  <i className="fa fa-bell-o" />
                                </div>
                              </div>
                              <div className="cont-col2">
                                <div className="desc"> Web server hardware needs to be upgraded.
                                  <span className="label label-sm label-warning"> Overdue </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col2">
                            <div className="date"> 2 hours </div>
                          </div>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <div className="col1">
                              <div className="cont">
                                <div className="cont-col1">
                                  <div className="label label-sm label-default">
                                    <i className="fa fa-briefcase" />
                                  </div>
                                </div>
                                <div className="cont-col2">
                                  <div className="desc"> IPO Report for year 2013 has been released. </div>
                                </div>
                              </div>
                            </div>
                            <div className="col2">
                              <div className="date"> 20 mins </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                      <h3 className="list-heading">System</h3>
                      <ul className="feeds list-items">
                        <li>
                          <div className="col1">
                            <div className="cont">
                              <div className="cont-col1">
                                <div className="label label-sm label-info">
                                  <i className="fa fa-check" />
                                </div>
                              </div>
                              <div className="cont-col2">
                                <div className="desc"> You have 4 pending tasks.
                                  <span className="label label-sm label-warning "> Take action
                                    <i className="fa fa-share" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col2">
                            <div className="date"> Just now </div>
                          </div>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <div className="col1">
                              <div className="cont">
                                <div className="cont-col1">
                                  <div className="label label-sm label-danger">
                                    <i className="fa fa-bar-chart-o" />
                                  </div>
                                </div>
                                <div className="cont-col2">
                                  <div className="desc"> Finance Report for year 2013 has been released. </div>
                                </div>
                              </div>
                            </div>
                            <div className="col2">
                              <div className="date"> 20 mins </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <div className="col1">
                            <div className="cont">
                              <div className="cont-col1">
                                <div className="label label-sm label-default">
                                  <i className="fa fa-user" />
                                </div>
                              </div>
                              <div className="cont-col2">
                                <div className="desc"> You have 5 pending membership that requires a quick review. </div>
                              </div>
                            </div>
                          </div>
                          <div className="col2">
                            <div className="date"> 24 mins </div>
                          </div>
                        </li>
                        <li>
                          <div className="col1">
                            <div className="cont">
                              <div className="cont-col1">
                                <div className="label label-sm label-info">
                                  <i className="fa fa-shopping-cart" />
                                </div>
                              </div>
                              <div className="cont-col2">
                                <div className="desc"> New order received with
                                  <span className="label label-sm label-success"> Reference Number: DR23923 </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col2">
                            <div className="date"> 30 mins </div>
                          </div>
                        </li>
                        <li>
                          <div className="col1">
                            <div className="cont">
                              <div className="cont-col1">
                                <div className="label label-sm label-success">
                                  <i className="fa fa-user" />
                                </div>
                              </div>
                              <div className="cont-col2">
                                <div className="desc"> You have 5 pending membership that requires a quick review. </div>
                              </div>
                            </div>
                          </div>
                          <div className="col2">
                            <div className="date"> 24 mins </div>
                          </div>
                        </li>
                        <li>
                          <div className="col1">
                            <div className="cont">
                              <div className="cont-col1">
                                <div className="label label-sm label-warning">
                                  <i className="fa fa-bell-o" />
                                </div>
                              </div>
                              <div className="cont-col2">
                                <div className="desc"> Web server hardware needs to be upgraded.
                                  <span className="label label-sm label-default "> Overdue </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col2">
                            <div className="date"> 2 hours </div>
                          </div>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <div className="col1">
                              <div className="cont">
                                <div className="cont-col1">
                                  <div className="label label-sm label-info">
                                    <i className="fa fa-briefcase" />
                                  </div>
                                </div>
                                <div className="cont-col2">
                                  <div className="desc"> IPO Report for year 2013 has been released. </div>
                                </div>
                              </div>
                            </div>
                            <div className="col2">
                              <div className="date"> 20 mins </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tab-pane page-quick-sidebar-settings" id="quick_sidebar_tab_3">
                    <div className="page-quick-sidebar-settings-list">
                      <h3 className="list-heading">General Settings</h3>
                      <ul className="list-items borderless">
                        <li> Enable Notifications
                          <input type="checkbox" className="make-switch" defaultChecked data-size="small" data-on-color="success" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                        <li> Allow Tracking
                          <input type="checkbox" className="make-switch" data-size="small" data-on-color="info" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                        <li> Log Errors
                          <input type="checkbox" className="make-switch" defaultChecked data-size="small" data-on-color="danger" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                        <li> Auto Sumbit Issues
                          <input type="checkbox" className="make-switch" data-size="small" data-on-color="warning" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                        <li> Enable SMS Alerts
                          <input type="checkbox" className="make-switch" defaultChecked data-size="small" data-on-color="success" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                      </ul>
                      <h3 className="list-heading">System Settings</h3>
                      <ul className="list-items borderless">
                        <li> Security Level
                          <select className="form-control input-inline input-sm input-small">
                            <option value={1}>Normal</option>
                            <option value={2} selected>Medium</option>
                            <option value="e">High</option>
                          </select>
                        </li>
                        <li> Failed Email Attempts
                          <input className="form-control input-inline input-sm input-small" defaultValue={5} /> </li>
                        <li> Secondary SMTP Port
                          <input className="form-control input-inline input-sm input-small" defaultValue={3560} /> </li>
                        <li> Notify On System Error
                          <input type="checkbox" className="make-switch" defaultChecked data-size="small" data-on-color="danger" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                        <li> Notify On SMTP Error
                          <input type="checkbox" className="make-switch" defaultChecked data-size="small" data-on-color="warning" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                      </ul>
                      <div className="inner-content">
                        <button className="btn btn-success">
                          <i className="icon-settings" /> Save Changes</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END QUICK SIDEBAR */}
          </div>
          {/* END CONTAINER */}
          {/* BEGIN FOOTER */}
          <div className="page-footer">
            <div className="page-footer-inner"> 2016 © Metronic Theme By
              <a target="_blank" href="http://keenthemes.com">Keenthemes</a> &nbsp;|&nbsp;
              <a href="http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes" title="Purchase Metronic just for 27$ and get lifetime updates for free" target="_blank">Purchase Metronic!</a>
            </div>
            <div className="scroll-to-top">
              <i className="icon-arrow-up" />
            </div>
          </div>
          {/* END FOOTER */}
        </div>
        {/* BEGIN QUICK NAV */}
        <nav className="quick-nav">
          <a className="quick-nav-trigger" href="#0">
            <span aria-hidden="true" />
          </a>
          <ul>
            <li>
              <a href="https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes" target="_blank" className="active">
                <span>Purchase Metronic</span>
                <i className="icon-basket" />
              </a>
            </li>
            <li>
              <a href="https://themeforest.net/item/metronic-responsive-admin-dashboard-template/reviews/4021469?ref=keenthemes" target="_blank">
                <span>Customer Reviews</span>
                <i className="icon-users" />
              </a>
            </li>
            <li>
              <a href="http://keenthemes.com/showcast/" target="_blank">
                <span>Showcase</span>
                <i className="icon-user" />
              </a>
            </li>
            <li>
              <a href="http://keenthemes.com/metronic-theme/changelog/" target="_blank">
                <span>Changelog</span>
                <i className="icon-graph" />
              </a>
            </li>
          </ul>
          <span aria-hidden="true" className="quick-nav-bg" />
        </nav>
        <div className="quick-nav-overlay" />
      </div>
    );
  }
};

export default App;
