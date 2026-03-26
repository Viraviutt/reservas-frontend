'use server'

// Definimos un tipo para la respuesta del servidor
export type FormState = {
  success: boolean;
  message: string;
  errors?: {
    email?: string[];
    password?: string[];
  };
};

export async function handleLogin(formData: FormData): Promise<FormState> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // Validación manual simple (o podrías usar Zod aquí)
  if (!email || !password) {
    return {
      success: false,
      message: "Todos los campos son obligatorios.",
    };
  }

  // Simulación de lógica de autenticación
  console.log("Procesando login para:", email);

  // Aquí iría tu lógica con Supabase, Auth.js o tu propia DB
  if (email === "usuario@test.com" && password === "123456") {
    return { success: true, message: "Acceso concedido" };
  }

  return {
    success: false,
    message: "Credenciales inválidas.",
  };
}