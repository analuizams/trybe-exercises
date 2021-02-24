import React, { Component } from 'react';
import './Form.css'

const states = ['Acre (AC)', 'Alagoas (AL)', 'Amapá (AP)', 'Amazonas (AM)', 'Bahia (BA)', 'Ceará (CE)', 'Distrito Federal (DF)', 'Espírito Santo (ES)', 'Goiás (GO)', 'Maranhão (MA)', 'Mato Grosso (MT)',
'Mato Grosso do Sul (MS)', 'Minas Gerais (MG)', 'Pará (PA)', 'Paraíba (PB)', 'Paraná (PR)', 'Pernambuco (PE)', 'Piauí (PI)', 'Rio de Janeiro (RJ)', 'Rio Grande do Norte (RN)', 'Rio Grande do Sul (RS)', 'Rondônia (RO)', 'Roraima (RR)', 'Santa Catarina (SC)', 'São Paulo (SP)', 'Sergipe (SE)', 'Tocantins (TO)'];

class Form extends Component {
  render() {
    const { handleChange, handleBlur } = this.props;
    return (
      <fieldset className="personal">
        <legend>Informações Pessoais:</legend>
        <div className="field">
          Nome:
          <input
            className="inputField"
            type="text"
            name="name"
            maxLength="40"
            required
            onChange={handleChange}
          />
        </div>
        <div className="field">
          Email:
          <input
            className="inputField"
            type="text"
            name="email"
            maxLength="50"
            required
            onChange={handleChange}
          />
        </div>
        <div className="field">
          CPF:
          <input
            className="inputField"
            type="text"
            name="cpf"
            maxLength="11"
            required
            onChange={handleChange}
          />
        </div>
        <div className="field">
          Endereço:
          <input
            className="inputField"
            type="text"
            name="address"
            maxLength="200"
            required
            onChange={handleChange}
          />
        </div>
        <div className="field">
          Cidade:
          <input
            className="inputField"
            type="text"
            name="city"
            maxLength="28"
            required
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          Estado:
          <select
            className="inputField"
            name="state"
            required
            onChange={handleChange}
            defaultValue=""
          >
            <option value="">Selecione</option>
            { states.map((state) => (
              <option value={state}>{state}</option>
            ))}
          </select>
        </div>
        <div className="field">
        <label>
          <input
            type="radio"
            name="type"
            value="house"
            onChange={handleChange}
            />
            Casa
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="apartment"
            onChange={handleChange}
            />
            Apartamento
        </label>
        </div>
      </fieldset>
    )
  }
}

export default Form;
