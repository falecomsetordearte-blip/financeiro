'use client'; // Diretiva importante para interatividade

import { useState } from 'react';

// Estilos para deixar a página mais bonita
const styles = {
  main: {
    fontFamily: 'sans-serif',
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '15px',
  },
  label: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '5px',
    fontWeight: 'bold',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  button: {
    padding: '12px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#0070f3',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  },
  message: {
    marginTop: '20px',
    padding: '10px',
    borderRadius: '4px',
  },
  success: {
    backgroundColor: '#d4edda',
    color: '#155724',
  },
  error: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
  },
};

export default function HomePage() {
  // Estados para guardar os valores do formulário
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [dueDate, setDueDate] = useState('');
  
  // Estados para mostrar mensagens ao usuário
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // Função que será chamada quando o botão for clicado
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Impede o recarregamento da página
    
    // Por enquanto, apenas mostra uma mensagem de sucesso
    setMessage(`Cobrança "${description}" de R$ ${value} para ${dueDate} seria enviada para o Asaas.`);
    setIsError(false);

    // Limpa o formulário
    setDescription('');
    setValue('');
    setDueDate('');
  };

  return (
    <main style={styles.main}>
      <h1>Meu Controle Financeiro</h1>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Descrição:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={styles.input}
          />
        </label>
        
        <label style={styles.label}>
          Valor (ex: 150.00):
          <input
            type="number"
            step="0.01"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
            style={styles.input}
          />
        </label>
        
        <label style={styles.label}>
          Data de Vencimento:
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            style={styles.input}
          />
        </label>
        
        <button type="submit" style={styles.button}>
          Registrar Lançamento
        </button>
      </form>

      {/* Área para mostrar mensagens de sucesso ou erro */}
      {message && (
        <div style={{ ...styles.message, ...(isError ? styles.error : styles.success) }}>
          {message}
        </div>
      )}
    </main>
  );
}
