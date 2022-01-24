'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">qiosk-webapp documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-48d94f8449768622252351eb09d0572d04273ef746f1c2e926e0c3ca75e9759ba153d682e3febf5e9c8229a954aba9dc94e95751742891bf178f5dbcc76afd16"' : 'data-target="#xs-components-links-module-AppModule-48d94f8449768622252351eb09d0572d04273ef746f1c2e926e0c3ca75e9759ba153d682e3febf5e9c8229a954aba9dc94e95751742891bf178f5dbcc76afd16"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-48d94f8449768622252351eb09d0572d04273ef746f1c2e926e0c3ca75e9759ba153d682e3febf5e9c8229a954aba9dc94e95751742891bf178f5dbcc76afd16"' :
                                            'id="xs-components-links-module-AppModule-48d94f8449768622252351eb09d0572d04273ef746f1c2e926e0c3ca75e9759ba153d682e3febf5e9c8229a954aba9dc94e95751742891bf178f5dbcc76afd16"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavigationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BookingModule.html" data-type="entity-link" >BookingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BookingModule-55a223e1ccb787941fd9348f10cfbcc69f4b715ca62a977a44dc4296111f5b983ea9d68f5bbe2d0208336fbec95b42e7b9e47fe26b9b1448d9a7d9da723e73e0"' : 'data-target="#xs-components-links-module-BookingModule-55a223e1ccb787941fd9348f10cfbcc69f4b715ca62a977a44dc4296111f5b983ea9d68f5bbe2d0208336fbec95b42e7b9e47fe26b9b1448d9a7d9da723e73e0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BookingModule-55a223e1ccb787941fd9348f10cfbcc69f4b715ca62a977a44dc4296111f5b983ea9d68f5bbe2d0208336fbec95b42e7b9e47fe26b9b1448d9a7d9da723e73e0"' :
                                            'id="xs-components-links-module-BookingModule-55a223e1ccb787941fd9348f10cfbcc69f4b715ca62a977a44dc4296111f5b983ea9d68f5bbe2d0208336fbec95b42e7b9e47fe26b9b1448d9a7d9da723e73e0"' }>
                                            <li class="link">
                                                <a href="components/BookingFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookingFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatePickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatePickerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainBookingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainBookingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ErrorModule.html" data-type="entity-link" >ErrorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ErrorModule-2a5fa34bf96b56bb596c4d739dd033eca13abdf71d712ddb36b26f3e67114fb517ba95f7635ccc0d23d3e8a137e95598f870fa49b4605003ebd608e8aebaaf34"' : 'data-target="#xs-components-links-module-ErrorModule-2a5fa34bf96b56bb596c4d739dd033eca13abdf71d712ddb36b26f3e67114fb517ba95f7635ccc0d23d3e8a137e95598f870fa49b4605003ebd608e8aebaaf34"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ErrorModule-2a5fa34bf96b56bb596c4d739dd033eca13abdf71d712ddb36b26f3e67114fb517ba95f7635ccc0d23d3e8a137e95598f870fa49b4605003ebd608e8aebaaf34"' :
                                            'id="xs-components-links-module-ErrorModule-2a5fa34bf96b56bb596c4d739dd033eca13abdf71d712ddb36b26f3e67114fb517ba95f7635ccc0d23d3e8a137e95598f870fa49b4605003ebd608e8aebaaf34"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SecurityModule.html" data-type="entity-link" >SecurityModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SecurityModule-56755db506a9eb1a9a09bd810609a587cc81b25a5a84e812095b68d94199e934b5d9f0a4f7f14a318284078a09763b38765ed20f99bb328c8a69fbc7e6b1ad83"' : 'data-target="#xs-components-links-module-SecurityModule-56755db506a9eb1a9a09bd810609a587cc81b25a5a84e812095b68d94199e934b5d9f0a4f7f14a318284078a09763b38765ed20f99bb328c8a69fbc7e6b1ad83"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SecurityModule-56755db506a9eb1a9a09bd810609a587cc81b25a5a84e812095b68d94199e934b5d9f0a4f7f14a318284078a09763b38765ed20f99bb328c8a69fbc7e6b1ad83"' :
                                            'id="xs-components-links-module-SecurityModule-56755db506a9eb1a9a09bd810609a587cc81b25a5a84e812095b68d94199e934b5d9f0a4f7f14a318284078a09763b38765ed20f99bb328c8a69fbc7e6b1ad83"' }>
                                            <li class="link">
                                                <a href="components/SecurityComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecurityComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SecurityModule-56755db506a9eb1a9a09bd810609a587cc81b25a5a84e812095b68d94199e934b5d9f0a4f7f14a318284078a09763b38765ed20f99bb328c8a69fbc7e6b1ad83"' : 'data-target="#xs-injectables-links-module-SecurityModule-56755db506a9eb1a9a09bd810609a587cc81b25a5a84e812095b68d94199e934b5d9f0a4f7f14a318284078a09763b38765ed20f99bb328c8a69fbc7e6b1ad83"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SecurityModule-56755db506a9eb1a9a09bd810609a587cc81b25a5a84e812095b68d94199e934b5d9f0a4f7f14a318284078a09763b38765ed20f99bb328c8a69fbc7e6b1ad83"' :
                                        'id="xs-injectables-links-module-SecurityModule-56755db506a9eb1a9a09bd810609a587cc81b25a5a84e812095b68d94199e934b5d9f0a4f7f14a318284078a09763b38765ed20f99bb328c8a69fbc7e6b1ad83"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersTableModule.html" data-type="entity-link" >UsersTableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UsersTableModule-2d318ab8d90473c438c9b37b57d13dc6b5ebbba09121a0ce4b3b00b33bfa8359829a3cc9a907074cfc80e1d8d226586327f06f82702df8d37f15ed9502fe67c4"' : 'data-target="#xs-components-links-module-UsersTableModule-2d318ab8d90473c438c9b37b57d13dc6b5ebbba09121a0ce4b3b00b33bfa8359829a3cc9a907074cfc80e1d8d226586327f06f82702df8d37f15ed9502fe67c4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsersTableModule-2d318ab8d90473c438c9b37b57d13dc6b5ebbba09121a0ce4b3b00b33bfa8359829a3cc9a907074cfc80e1d8d226586327f06f82702df8d37f15ed9502fe67c4"' :
                                            'id="xs-components-links-module-UsersTableModule-2d318ab8d90473c438c9b37b57d13dc6b5ebbba09121a0ce4b3b00b33bfa8359829a3cc9a907074cfc80e1d8d226586327f06f82702df8d37f15ed9502fe67c4"' }>
                                            <li class="link">
                                                <a href="components/UsersTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/BookingDetailComponent.html" data-type="entity-link" >BookingDetailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BookingsTableComponent.html" data-type="entity-link" >BookingsTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashboardComponent.html" data-type="entity-link" >DashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LinkTagComponent.html" data-type="entity-link" >LinkTagComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/GlobalConstants.html" data-type="entity-link" >GlobalConstants</a>
                            </li>
                            <li class="link">
                                <a href="classes/LanguageApp.html" data-type="entity-link" >LanguageApp</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EncryptionService.html" data-type="entity-link" >EncryptionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Company.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User-1.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserResponse.html" data-type="entity-link" >UserResponse</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});