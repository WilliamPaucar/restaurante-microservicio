import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VentasModule } from './ventas/ventas.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { ProductosModule } from './productos/productos.module';
import { RolesModule } from './roles/roles.module';
import { InsumosModule } from './insumos/insumos.module';

@Module({
  imports: [VentasModule, EmpleadosModule, ProductosModule, RolesModule, InsumosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
