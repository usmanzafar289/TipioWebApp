<template>
  <div>
    <div class="text-4xl font-bold my-4">
      <h2>Nøkkelopplysninger fra Enhetsregisteret</h2>
    </div>
  </div>
    <div class="grid gap-4 md:gap-8 grid-flow-row auto-rows-max md:auto-rows-min">
      <div>
        <div class="grid grid-cols-2 gap-4">
          <div>Organisasjonsnummer:</div>
          <div>{{ info.organisasjonsnummer }}</div>
        </div>
      </div>
      <div>
        <div class="grid grid-cols-2 gap-4">
          <div>Navn/foretaksnavn:</div>
          <div>{{ info.navn }}</div>
        </div>
      </div>
      <div>
        <div class="grid grid-cols-2 gap-4">
          <div>Registrert i Enhetsregisteret:</div>
          <div>{{ info.registreringsdatoEnhetsregisteret }}</div>
        </div>
      </div>
      <div>
        <div class="grid grid-cols-2 gap-4">
          <div>Organisasjonsform:</div>
          <div>{{organisasjonsForm}}</div>
        </div>
      </div>
      <div>
        <div class="grid grid-cols-2 gap-4">
          <div>antallAnsatte:</div>
          <div>{{ info.antallAnsatte }}</div>
        </div>
      </div>
      <div>
        <div class="grid grid-cols-2 gap-4">
          <div>Forretningsadresse:</div>
          <div>{{forretningsadresse.adresse}} {{forretningsadresse.postnummer}} {{forretningsadresse.kommune}}  </div>
        </div>
      </div>
       <div>
        <div class="grid grid-cols-2 gap-4">
          <div>Kommune:</div>
          <div>{{forretningsadresse.kommune}} {{forretningsadresse.kommunenummer}}</div>
        </div>
      </div>
      <div>
        <div class="grid grid-cols-2 gap-4">
          <div>Land:</div>
          <div>{{forretningsadresse.land}}</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      info: {},
      organisasjonsForm:'',
      forretningsadresse:{
        adresse:'',
        postnummer :'',
        kommune:'',
        kommunenummer:'',
        land:'',
      }
    };
  },
  methods: {
fetchData () {
  const self = this;
  fetch(`https://data.brreg.no/enhetsregisteret/api/enheter/${this.$route.params.orgnr}`)
    .then( resp => resp.json())
    .then((data) => (this.info = data))
    .then(function (data) {
     console.log(data);
     self.organisasjonsForm=data.organisasjonsform.beskrivelse;
     self.forretningsadresse.adresse=data.forretningsadresse.adresse;
     self.forretningsadresse.postnummer=data.forretningsadresse.postnummer;
     self.forretningsadresse.kommune=data.forretningsadresse.kommune;
     self.forretningsadresse.kommunenummer=data.forretningsadresse.kommunenummer;
     self.forretningsadresse.land=data.forretningsadresse.land;
     })
    .catch(err => console.error(err))
}
  },
  mounted() {
    this.fetchData();
  },
  
};
</script>

<style></style>
