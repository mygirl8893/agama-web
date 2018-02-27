import React from 'react';
import { translate } from '../../translate/translate';

const AddCoinRender = function() {
  return (
    <div onKeyDown={ (event) => this.handleKeydown(event) }>
      <div className={ `modal modal-3d-sign add-coin-modal ${this.state.modalClassName}` }>
        <div
          onClick={ this.dismiss }
          className="modal-close-overlay"></div>
        <div className="modal-dialog modal-center modal-lg">
          <div
            onClick={ this.dismiss }
            className="modal-close-overlay"></div>
          <div className="modal-content">
            <div className="modal-header bg-orange-a400 wallet-send-header">
              <button
                type="button"
                className="close white"
                onClick={ this.dismiss }>
                <span>×</span>
              </button>
              <h4 className="modal-title white">
                { translate('INDEX.SELECT_A_COIN') }
              </h4>
            </div>
            <div className="modal-body">
              {/*<button
                className="btn btn-primary btn-add-coin-item"
                onClick={ this.addNewItem }>+</button>
              <button
                className="btn btn-outline-primary btn-add-coin-item-options"
                onClick={ this.toggleActionsMenu }>
                <i className={ 'fa-chevron-' + (this.state.actionsMenu ? 'up' : 'down') }></i>
              </button>
              <span className={ !this.state.actionsMenu ? 'hide' : '' }>
                <button
                  className="btn btn-outline-primary btn-save-coin-selection"
                  onClick={ this.saveCoinSelection }>
                    { translate('ADD_COIN.SAVE_SELECTION') }
                </button>
                <button
                  className="btn btn-outline-primary btn-load-coin-selection"
                  onClick={ this.loadCoinSelection }>
                    { translate('ADD_COIN.LOAD_SELECTION') }
                </button>
              </span>*/}
              { this.renderCoinSelectors() }
              <div className={ 'text-align-center vertical-margin-20 horizontal-margin-0 padding-bottom-20 ' + (this.hasMoreThanOneCoin() ? 'col-sm-12' : 'hide') }>
                <button
                  type="button"
                  className="btn btn-primary col-sm-4 float-none"
                  onClick={ this.activateAllCoins }>
                    { translate('ADD_COIN.ACTIVATE_ALL') }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={ 'modal-backdrop ' + (this.state.display ? 'show in' : 'fade hide') }></div>
    </div>
  )
};

export default AddCoinRender;