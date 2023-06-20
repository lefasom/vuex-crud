<template>
    <div>
        <img :src="imageUrl" alt="Imagen" /> <!-- Utilizando la URL de la imagen recibida como prop -->
        <!-- Contenido adicional del componente B -->
    </div>
</template>
<style>
img {
    width: 100px;
    height: 100px;
}
</style>
<script>
export default {
    props: {
        imageUrl: {
            type: String,
            required: true
        }
    },
    // Lógica del componente B
}
</script>
