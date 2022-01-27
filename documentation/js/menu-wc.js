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
                                            'data-target="#components-links-module-AppModule-0546477b424d0b9ca38164da2e43ffe4235054372950ade42b26710ee474b561aaa341646a774334b43333045ac0fd0670ad74ccc896a44dc103a9218597db5e"' : 'data-target="#xs-components-links-module-AppModule-0546477b424d0b9ca38164da2e43ffe4235054372950ade42b26710ee474b561aaa341646a774334b43333045ac0fd0670ad74ccc896a44dc103a9218597db5e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-0546477b424d0b9ca38164da2e43ffe4235054372950ade42b26710ee474b561aaa341646a774334b43333045ac0fd0670ad74ccc896a44dc103a9218597db5e"' :
                                            'id="xs-components-links-module-AppModule-0546477b424d0b9ca38164da2e43ffe4235054372950ade42b26710ee474b561aaa341646a774334b43333045ac0fd0670ad74ccc896a44dc103a9218597db5e"' }>
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
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-4fecfdbdbc914b1dd764d9d7cec81f6a693a0d773b2c2f6b10cfbef5751c468f229e92b9461b10b88ff72e92cd7070cb9eaa593645b8394b2ebd6c93dadab558"' : 'data-target="#xs-components-links-module-DashboardModule-4fecfdbdbc914b1dd764d9d7cec81f6a693a0d773b2c2f6b10cfbef5751c468f229e92b9461b10b88ff72e92cd7070cb9eaa593645b8394b2ebd6c93dadab558"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-4fecfdbdbc914b1dd764d9d7cec81f6a693a0d773b2c2f6b10cfbef5751c468f229e92b9461b10b88ff72e92cd7070cb9eaa593645b8394b2ebd6c93dadab558"' :
                                            'id="xs-components-links-module-DashboardModule-4fecfdbdbc914b1dd764d9d7cec81f6a693a0d773b2c2f6b10cfbef5751c468f229e92b9461b10b88ff72e92cd7070cb9eaa593645b8394b2ebd6c93dadab558"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
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
                                            'data-target="#components-links-module-SecurityModule-6f0010966902d04dd6dbf3fff1592dd2cdaf6c249ba4391dea92a3ef09fa1d3c398f4b9162fdf6f195cf27b43e3ec33ebd0dbc6255a26d2f1e393b559adbee3d"' : 'data-target="#xs-components-links-module-SecurityModule-6f0010966902d04dd6dbf3fff1592dd2cdaf6c249ba4391dea92a3ef09fa1d3c398f4b9162fdf6f195cf27b43e3ec33ebd0dbc6255a26d2f1e393b559adbee3d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SecurityModule-6f0010966902d04dd6dbf3fff1592dd2cdaf6c249ba4391dea92a3ef09fa1d3c398f4b9162fdf6f195cf27b43e3ec33ebd0dbc6255a26d2f1e393b559adbee3d"' :
                                            'id="xs-components-links-module-SecurityModule-6f0010966902d04dd6dbf3fff1592dd2cdaf6c249ba4391dea92a3ef09fa1d3c398f4b9162fdf6f195cf27b43e3ec33ebd0dbc6255a26d2f1e393b559adbee3d"' }>
                                            <li class="link">
                                                <a href="components/SecurityComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecurityComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SecurityModule-6f0010966902d04dd6dbf3fff1592dd2cdaf6c249ba4391dea92a3ef09fa1d3c398f4b9162fdf6f195cf27b43e3ec33ebd0dbc6255a26d2f1e393b559adbee3d"' : 'data-target="#xs-injectables-links-module-SecurityModule-6f0010966902d04dd6dbf3fff1592dd2cdaf6c249ba4391dea92a3ef09fa1d3c398f4b9162fdf6f195cf27b43e3ec33ebd0dbc6255a26d2f1e393b559adbee3d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SecurityModule-6f0010966902d04dd6dbf3fff1592dd2cdaf6c249ba4391dea92a3ef09fa1d3c398f4b9162fdf6f195cf27b43e3ec33ebd0dbc6255a26d2f1e393b559adbee3d"' :
                                        'id="xs-injectables-links-module-SecurityModule-6f0010966902d04dd6dbf3fff1592dd2cdaf6c249ba4391dea92a3ef09fa1d3c398f4b9162fdf6f195cf27b43e3ec33ebd0dbc6255a26d2f1e393b559adbee3d"' }>
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
                                <a href="modules/TagModule.html" data-type="entity-link" >TagModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TagModule-ecea11233e136f3d0f6e97de6158712913fc7705b7dc7a13fc76428b80fdac1e7c0cbc89022c5f5fae6bfe7ef1b64bf1ff5e5a1a0bb883e455e4864307cb461c"' : 'data-target="#xs-components-links-module-TagModule-ecea11233e136f3d0f6e97de6158712913fc7705b7dc7a13fc76428b80fdac1e7c0cbc89022c5f5fae6bfe7ef1b64bf1ff5e5a1a0bb883e455e4864307cb461c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TagModule-ecea11233e136f3d0f6e97de6158712913fc7705b7dc7a13fc76428b80fdac1e7c0cbc89022c5f5fae6bfe7ef1b64bf1ff5e5a1a0bb883e455e4864307cb461c"' :
                                            'id="xs-components-links-module-TagModule-ecea11233e136f3d0f6e97de6158712913fc7705b7dc7a13fc76428b80fdac1e7c0cbc89022c5f5fae6bfe7ef1b64bf1ff5e5a1a0bb883e455e4864307cb461c"' }>
                                            <li class="link">
                                                <a href="components/TagFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TagTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TagModule-ecea11233e136f3d0f6e97de6158712913fc7705b7dc7a13fc76428b80fdac1e7c0cbc89022c5f5fae6bfe7ef1b64bf1ff5e5a1a0bb883e455e4864307cb461c"' : 'data-target="#xs-injectables-links-module-TagModule-ecea11233e136f3d0f6e97de6158712913fc7705b7dc7a13fc76428b80fdac1e7c0cbc89022c5f5fae6bfe7ef1b64bf1ff5e5a1a0bb883e455e4864307cb461c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TagModule-ecea11233e136f3d0f6e97de6158712913fc7705b7dc7a13fc76428b80fdac1e7c0cbc89022c5f5fae6bfe7ef1b64bf1ff5e5a1a0bb883e455e4864307cb461c"' :
                                        'id="xs-injectables-links-module-TagModule-ecea11233e136f3d0f6e97de6158712913fc7705b7dc7a13fc76428b80fdac1e7c0cbc89022c5f5fae6bfe7ef1b64bf1ff5e5a1a0bb883e455e4864307cb461c"' }>
                                        <li class="link">
                                            <a href="injectables/TagService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagRoutingModule.html" data-type="entity-link" >TagRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-e3ff19349d5a01bed25c2b3783a154b74bd6ba91aa286cfcdbffe4802d3441e07e6d59a07c90e6483eaa2b96ad345d6099f73b7f68f552a4225739281b713ccf"' : 'data-target="#xs-components-links-module-UserModule-e3ff19349d5a01bed25c2b3783a154b74bd6ba91aa286cfcdbffe4802d3441e07e6d59a07c90e6483eaa2b96ad345d6099f73b7f68f552a4225739281b713ccf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-e3ff19349d5a01bed25c2b3783a154b74bd6ba91aa286cfcdbffe4802d3441e07e6d59a07c90e6483eaa2b96ad345d6099f73b7f68f552a4225739281b713ccf"' :
                                            'id="xs-components-links-module-UserModule-e3ff19349d5a01bed25c2b3783a154b74bd6ba91aa286cfcdbffe4802d3441e07e6d59a07c90e6483eaa2b96ad345d6099f73b7f68f552a4225739281b713ccf"' }>
                                            <li class="link">
                                                <a href="components/UserFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-e3ff19349d5a01bed25c2b3783a154b74bd6ba91aa286cfcdbffe4802d3441e07e6d59a07c90e6483eaa2b96ad345d6099f73b7f68f552a4225739281b713ccf"' : 'data-target="#xs-injectables-links-module-UserModule-e3ff19349d5a01bed25c2b3783a154b74bd6ba91aa286cfcdbffe4802d3441e07e6d59a07c90e6483eaa2b96ad345d6099f73b7f68f552a4225739281b713ccf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-e3ff19349d5a01bed25c2b3783a154b74bd6ba91aa286cfcdbffe4802d3441e07e6d59a07c90e6483eaa2b96ad345d6099f73b7f68f552a4225739281b713ccf"' :
                                        'id="xs-injectables-links-module-UserModule-e3ff19349d5a01bed25c2b3783a154b74bd6ba91aa286cfcdbffe4802d3441e07e6d59a07c90e6483eaa2b96ad345d6099f73b7f68f552a4225739281b713ccf"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersTableModule.html" data-type="entity-link" >UsersTableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UsersTableModule-ddb52c3e81a3e48d64a523e8a7591ff403c10ef57dbce40c39a863e12a6c7f4978ff65f1016196b7b0e74d91c94c27fb3b205d93c530ceeada3a94c46118f723"' : 'data-target="#xs-components-links-module-UsersTableModule-ddb52c3e81a3e48d64a523e8a7591ff403c10ef57dbce40c39a863e12a6c7f4978ff65f1016196b7b0e74d91c94c27fb3b205d93c530ceeada3a94c46118f723"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsersTableModule-ddb52c3e81a3e48d64a523e8a7591ff403c10ef57dbce40c39a863e12a6c7f4978ff65f1016196b7b0e74d91c94c27fb3b205d93c530ceeada3a94c46118f723"' :
                                            'id="xs-components-links-module-UsersTableModule-ddb52c3e81a3e48d64a523e8a7591ff403c10ef57dbce40c39a863e12a6c7f4978ff65f1016196b7b0e74d91c94c27fb3b205d93c530ceeada3a94c46118f723"' }>
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
                                <a href="components/KioskTableComponent.html" data-type="entity-link" >KioskTableComponent</a>
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
                                    <a href="injectables/BookingService.html" data-type="entity-link" >BookingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CompanyService.html" data-type="entity-link" >CompanyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EncryptionService.html" data-type="entity-link" >EncryptionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KioskService.html" data-type="entity-link" >KioskService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TagService.html" data-type="entity-link" >TagService</a>
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
                                <a href="interfaces/Booking.html" data-type="entity-link" >Booking</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Company.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Company-1.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Kiosk.html" data-type="entity-link" >Kiosk</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tag.html" data-type="entity-link" >Tag</a>
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
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
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