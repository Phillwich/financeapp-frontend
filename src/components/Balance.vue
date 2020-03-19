<template>
  <v-container>
    <v-card>
      <v-card-text>
        <h1 class="text-center pb-5">{{user.balance}}€</h1>
        <v-expansion-panels>
            <v-expansion-panel>
                <v-expansion-panel-header>Notes</v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-simple-table>
                        <template>
                            <thead>
                                <tr>
                                    <th>Note</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in user.balanceChanges" :key="item.note">
                                    <td>{{item.note}}</td>
                                    <td>{{item.amount}}</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
      <v-card-actions>
        <v-dialog v-model="change" width="350">
          <template v-slot:activator="{on}">
            <v-btn v-on="on">Add Change</v-btn>
          </template>
          <v-card>
            <v-card-title>Add a change to your balance</v-card-title>
            <v-card-text>
              <v-text-field v-model="amount" label="Your ammount"></v-text-field>
              <v-text-field v-model="note" label="Note"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn color="green" @click="add">Add</v-btn>
              <v-btn color="red" @click="remove">Minus</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      change: false,
      amount: null,
      note: null
    };
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    ...mapActions(["updateBalance"]),
    async add() {
      const newBalance = Number(this.user.balance) + Number(this.amount);
      this.user.balanceChanges.push({
        note: this.note,
        amount: this.amount,
        kind: "Add"
      });
      const response = await this.updateBalance({
        userId: this.user.userId,
        data: {
          balance: newBalance,
          balanceChanges: this.user.balanceChanges
        }
      });
      this.change = false
      this.amount = null
      this.note = null
    },
    async remove() {
      const newBalance = Number(this.user.balance) - Number(this.amount);
      this.user.balanceChanges.push({
        note: this.note,
        amount: this.amount,
        kind: "Delete"
      });
      const response = await this.updateBalance({
        userId: this.user.userId,
        data: {
          balance: newBalance,
          balanceChanges: this.user.balanceChanges
        }
      });
      this.change = false
      this.amount = null
      this.note = null
    }
  }
};
</script>